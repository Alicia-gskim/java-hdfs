/**
 * http://usejsdoc.org/
 */
var uploadPath = "/";

$a.page(function(){
	
	this.init = function(id, param){
		console.log("id : " + id);
		console.log("param : " + param);
		
		$('#showPath').show();
		
		// 최초 root 목록 생성을 위한 함수 호출
		hdfsAjax('/hdfsInfo');
		
		$('#upload_area').show();
		
		// 파일 업로드 - 멀티
		var uploadObj = $("#fileuploader").setOptions({
	        url : '/hdfsPutFiles',
	        fileName : 'uploadFiles',
//	        maxFileSize : 1000000,
	        showFileCounter : true,
	        showDone: false,
	        formData : {
	        	uploadPath : uploadPath
	        },
	        onLoad : function(obj){
	        	console.log("onload : " + obj);
	        	var addFormTag = "<form id='infoFilesForm' method='POST' enctype='multipart/form-data'></form>";
	        	$('#upload_area').after(addFormTag);
	        },
	        onSelect : function(files) {
	        	var addFormTag = "";
	        	for(var i=0; i < files.length; i++){
	        		addFormTag += "	<div name='"+ files[i].name +"'>";
	        		addFormTag += "		<input type='hidden' name='"+ files[i].name +"' value='"+ files[i].name +"'/>";
	        		addFormTag += "		<input type='hidden' name='"+ files[i].size +"' value='"+ files[i].size +"'/>";
	        		addFormTag += "	</div>";
	        		
	        		var fileInfo = files[i].name + " (" + files[i].size + "Byte)";
	        		console.log(fileInfo);
	        	}
	        	
	        	$('#infoFilesForm').append(addFormTag);
	        	
	        	return true;
	        	// return false; / 리턴 값이 false 일 경우, 선택 취소
	        },
	        onSubmit : function(files, xhr) {
	        	// startUpload() 이 호출되면 실행됨
	        	console.log("Submit File : " + files);
	        	console.log("Submit : " + xhr);
	        	
	        	$('#infoFilesForm').html("");
	        	// return false; // 리턴 값이 false 일 경우, 전송 중단
	        },
	        onError : function(files, status, errMsg, pd) {
	        	var errorInfo = files+" / "+status+" / "+errMsg;
	        	alert(errorInfo);
	        },
	        onCancel : function(files, pd) {
	        	var cancelInfo = "Cancel File : "+files;
	        	console.log(cancelInfo);
	        	$('div[name="'+ files +'"]').detach();
	        },
	        onSuccess : function(files,data,xhr,pd){
	        	console.log(files);
	        	console.log(data);
	        	console.log(xhr);
	        	console.log(pd);
	        	if($('#rootLi').length > 0){
	        		var data = { data: $('#rootLi a')[0].name };
	        		hdfsAjax('/hdfsInfo', data);
	        	} else {
	        		hdfsAjax('/hdfsInfo');
	        	}
	        },
	        deleteCallback: function(fileInfo, pd){
	        	$a.request('/delete', {
	        		data : {'fileName': fileInfo.name},
	        		success: function(res){
	        			pd.statusbar.hide();
	        			console.log(res.fileName + "삭제 성공");
	        		}
	        	});
	        },
	        downloadCallback: function(fileInfo, pd){
	        	console.log(fileInfo);
	        	console.log(pd);
	        }
		});
	};
	
	// fileupload 시작
	$(document).on('click', '#startUpload', function(){
         $("#fileuploader").startUpload();
	});
	// fileupload 중단
	$(document).on('click', '#stopUpload', function(){
        $("#fileuploader").stopUpload();
	});
	// fileupload 파일목록 전부 취소(목록 삭제)
	$(document).on('click', '#cancelAll', function(){
        $("#fileuploader").cancelAll();
	});

	// 경로 이동
	$(document).on('click', 'a', function() {
		var parentPath = $('input[name=parentPath]').val();
		var data = {};
		
		if(this.text != ".."){ // 1. 하위 경로 이동
			if($('#rootLi').length == 0){ // "/"일 때 하위 경로로 이동
				data = {
						data: "/" + this.name
				};
				
			} else { // 여러 depth이거나, 파일을 선택했을 때
				data = {
						data: $('#rootLi a')[0].name + "/" + this.name
				};
				
			}
		} else { //2. 상위 경로 이동
			data = {
					data: parentPath
			};
		}
		
		hdfsAjax('/hdfsInfo',data);
		
		if(this.text != ".."){
			//하위 경로 이동
			if(this.name.indexOf(".") != -1){
				//파일을 선택했을 경우
				$('#showPath').hide();
				$('#upload_area').hide();
			} else {
				//폴더를 선택했을 경우
				$('#showPath').show();
				$('#upload_area').show();
				
				// 상단에 현재 접속한 경로 표시
				var showAreaTag = '';
				showAreaTag += '<span class="separator">/</span>';
				
				var splitPath = ((data.data).substring((data.data).indexOf("/")+1, (data.data).length)).split("/");
				for(var i=0; i<splitPath.length; i++){
					showAreaTag += '<span>';
					showAreaTag += '	<a href="#">'+ splitPath[i] +'</a>';
					showAreaTag += '</span>';
					if(i != splitPath.length-1){
						showAreaTag += '<span class="separator">/</span>';
					}
				}
				$('#showPath').html(showAreaTag);
			}
		} else {
			//상위 경로 이동
			if(parentPath != "/"){
				//root가 아닌 경우
				$('#showPath').show();
				
				// 상단에 현재 접속한 경로 표시
				var showAreaTag = '';
				showAreaTag += '<span class="separator">/</span>';
				
				var splitPath = ((data.data).substring((data.data).indexOf("/")+1, (data.data).length)).split("/");
				for(var i=0; i<splitPath.length; i++){
					showAreaTag += '<span>';
					showAreaTag += '	<a href="#">'+ splitPath[i] +'</a>';
					showAreaTag += '</span>';
					if(i != splitPath.length-1){
						showAreaTag += '<span class="separator">/</span>';
					}
				}
				$('#showPath').html(showAreaTag);
			} else{
				//root인 경우
				$('#showPath').hide();
			}
			
			$('#upload_area').show();
		}
		
		$('#fileuploader').cancelAll();
		
		// -------------------------업로드할 하둡 경로 변경
		uploadPath = data.data;
		console.log("move dept : " + uploadPath);
		
		$('#fileuploader').setOptions({
			formData: {
				uploadPath : uploadPath
			}
		});
		// -------------------------업로드할 하둡 경로 변경
	});
	
	function hdfsAjax(url, data){
		$.ajax({
			type : 'post',
			dataType : 'json',
			url : url,
			data : data,
			error : function(e){
				console.log(e);
			},
			success : function(data){
				var detailPath = data.result.detailPath;
				var parentPath = data.result.parentPath;
				var fullPath = data.result.fullPath;
				var fileContents = data.result.fileContents;
				
				$('input[name=parentPath]').val(parentPath);
				
				var appendTag = "";
				appendTag += '<div style="width:100%">';
				appendTag += '	<ul class="List">';
				if(fullPath != "/" && parentPath != ""){ // 최상위 경로인 경우
					appendTag += '<li id="rootLi" class="Link"><a href="#" name="'+ fullPath +'"><span style="font-size:20px;">..</span></a></li>';
				}
				if(detailPath != null){
					var data_list = [];
					for(var i = 0; i < detailPath.length; i++){
						if(fileContents == null){ //파일이 아닌 경우
							appendTag += '	<li class="Link">';
							appendTag += '		<a name="'+ detailPath[i] +'" href="#"><span style="font-size:15px;"><strong>' + detailPath[i] + '</strong></span></a>';
							appendTag += '	</li>';
							
							// 현재 경로의 폴더 및 파일 목록 저장 -> select box에 data-binding에 필요한 값
							data_list.push( {cnt:(i+1), dirName:detailPath[i]} );
						}
					}
					$('#cnt_dirName').setData({option_data:data_list});
				}
				appendTag += '	</ul>';
				appendTag += '</div>';
				
				$('#pathFrame').html(appendTag);
				
				if(fileContents != null){
					$('#groupBtn').hide();
					$('#valueFrame').show();
					var contentTag = '';
					contentTag += '	<div class="Panel">';
					contentTag += '		<div class="Panel-header"><strong>'+ detailPath +'</strong></div>';
					for(var i=0; i < fileContents.length; i++){
						contentTag += '<p>'+ fileContents[i] +'</p>';
						if(i != (fileContents.length-1)){
							contentTag += '<br/>';
						}
					}
					contentTag += '		<div class="Panel-content">';
					contentTag += '		</div>';
					contentTag += '	</div>';
					
					$('#valueFrame').html(contentTag);
				} else {
					$('#groupBtn').show();
					$('#valueFrame').html("");
					$('#valueFrame').hide();
				}
			}
		});
	};
	
	function comparePathFunc(){
		var createPath = "";
		if($('#rootLi').length != 0){
			createPath = $('input[name=parentPath]').val();
		} else {
			createPath = "/";
		}
		
		return createPath;
	}
	
	// 폴더 생성
	$(document).on('click', '#addDir', function() {
		var inputVal = $('#dirName').val();
		if(inputVal != ""){
			var url = this.name;
			var data = {};
			if($('#rootLi').length != 0){ // root가 아닐 경우
				data = {
						data: $('#rootLi a')[0].name + "/" + inputVal
				};
			} else { // root일 경우
				data = {
						data: "/" + inputVal
				};
			}
			
			$.ajax({
				type : 'post',
				dataType : 'json',
				url : url,
				data : data,
				error : function(e){
					console.log(e);
				},
				success : function(data){
					var msg = data.msg;
					alert(msg);
					
					reloadFunc();
				}
			});
		} else {
			alert("값을 입력하세요!");
		}
	});
	
	// 폴더 삭제
	$(document).on('click', '#delDir', function(){
		var selPath = $('#cnt_dirName').getTexts()[0];
		if(selPath != "선택"){
			var url = this.name;
			var data = {};
			if($('#rootLi').length != 0){ // root가 아닐 경우
				data = {
						data: $('#rootLi a')[0].name + "/" + selPath
				};
			} else { // root일 경우
				data = {
						data: "/" + selPath
				};
			}
			
			$.ajax({
				type: 'post',
				dataType: 'json',
				url: url,
				data: data,
				error: function(e){
					console.log(e);
				},
				success: function(data){
					var msg = data.msg;
					alert(msg);
					
					reloadFunc();
				}
			});
		} else {
			alert("값을 선택하세요!");
		}
	});
	
	// 화면 새로고침
	function reloadFunc(){
		var reloadPath = {};
		if($('#rootLi').length != 0){
			//root가 아닌 경우
			reloadPath = { data: $('#rootLi a')[0].name };
		} else {
			//root인 경우
			reloadPath = { data: "/" };
		}
		
		hdfsAjax('/hdfsInfo', reloadPath);
		
		// 입력상자 초기화
		$('#dirName').val("");
		// 선택상자 초기화
		$('#dirName').selectionInitialization();
	}
});