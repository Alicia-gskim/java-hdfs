/**
 * http://usejsdoc.org/
 */
$(function(){
	
	// 사용자 테이블 목록 조회
	$('#getTbl').on('click', function(){
		console.log("Get Table List");
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/oracle/selectTbl',
			success: function(res){
				var result = res.data.info;
				
				var html = "";
				if($('#tblList').children().length != 0){
					$('#tblList').html(html);
				}
				html += '<div class="box">';
				html += '	<div class="box-body">';
				html += '		<table id="listTbl" class="table table-bordered table-hover">';
				html += '			<thead>';
				html += '				<tr>';
				html += '					<th>OBJECT_NAME</th>';
				html += '				</tr>';
				html += '			</thead>';
				html += '			<tbody>';
				for(var i=0; i< result.length; i++){
					html += '			<tr>';
					html += '				<td name="'+ result[i].OBJECT_NAME +'">'+ result[i].OBJECT_NAME +'</td>';
					html += '			</tr>';
				}
				html += '			</tbody>';
				html += '		</table>';
				html += '	</div>';
				html += '</div>';
				
				$('#tblList').append(html);
			},
			error: function(e){
				console.log(e);
			}
		});
	});
	
	//테이블 선택시 테이블 데이터 정보 조회
	$(document).on('click', '#listTbl td', function(){
		var name = $(this).text();
		if($('#tblContents').children().length != 0){
			$('#tblContents').children().html("");
		}
		
		$.ajax({
			type: 'post',
			dataType: 'json',
			url: '/oracle/selectTblInfo',
			data: {
				tblName: name
			},
			success: function(res){
				var dataInfo = res.data.info; // 선택 테이블의 저장된 데이터 정보
				var colInfo = res.data.colInfo;
				
				var html = "";
				html += '<div class="box">';
				html += '	<div class="box-header">';
				html += '		<h3 class="box-title">'+ name +'</h3>';
				html += '	</div>';
				html += '	<div class="box-body">';
				html += '		<table id="selecTblContents" class="table table-bordered table-hover">';
				html += '			<thead>';
				html += '				<tr>';
				for(var i=0; i<colInfo.length; i++){
					html += '				<th>'+ colInfo[i].COLUMN_NAME +'</th>';
				}
				html += '				</tr>';
				html += '			</thead>';
				html += '			<tbody>';
				for(var i=0; i<dataInfo.length; i++){
					html += '			<tr>';
					for(var j=0; j<colInfo.length; j++){
						var colName = colInfo[j].COLUMN_NAME;
						var dataArr = dataInfo[i];
						html += '			<td>'+ dataArr[colName] +'</td>';
					}
					html += '			</tr>';
				}
				html += '			</tbody>';
				html += '		</table>';
				html += '	</div>';
				html += '</div>';
				
				$('#tblContents').append(html);
			},
			error: function(e){
				console.log(e);
			}
		});
	});
});