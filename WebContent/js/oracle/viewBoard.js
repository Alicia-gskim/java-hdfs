/**
 * http://usejsdoc.org/
 */
$(function() {

	/**
	 * 최초 화면 접속일때 - session에서 user_name, user_password를 컨트롤러에 전달 - 전달받은 값으로, 데이터
	 * 조회 쿼리 실행 - 조회한 결과를 화면에 보여줌
	 */
	var pageNo = 1;
	getJsonData(pageNo);

});

function getJsonData(pageNo) {
	$
			.ajax({
				type : 'post',
				dataType : 'json',
				url : '/oracle/selectGetBoardInfo',
				data : {
					pageNo : pageNo
				},
				success : function(res) {
					var dataList = res.data.boardInfo.dataList;
					var keyList = res.data.boardInfo.keyList;
					/**
					 * UI-Template 사용으로 인해 별도의 페이징 처리 안해줘도 됨 var pageNo =
					 * res.data.boardInfo.pageNo; var startPageNo =
					 * res.data.boardInfo.startPageNo; var endPageNo =
					 * res.data.boardInfo.endPageNo; var pageBlock =
					 * res.data.boardInfo.pageBlock;
					 * console.log(res.data.boardInfo); console.log(pageNo);
					 * console.log(startPageNo); console.log(endPageNo);
					 * console.log(pageBlock);
					 */
					console.log(keyList);
					console.log(dataList);
					var html = "";
					html += '<div class="box">';
					html += '	<div class="box-header">';
					html += '		<h3 class="box-title"> 게시판 </h3>';
					html += '	</div>';
					html += '	<div class="box-body">';
					html += '		<table id="selecTblContents" class="table table-bordered table-hover" style="width:70%;">';
					html += '			<colgroup>';
					html += '				<col width="70px" />';
					html += '				<col width="" />';
					html += '				<col width="110px" />';
					html += '				<col width="70px" />';
					html += '				<col width="150px" />';
					html += '				<col width="150px" />';
					html += '			</colgroup>';
					html += '			<thead>';
					html += '				<tr>';
					for (var i = 0; i < keyList.length; i++) {
						if (keyList[i] != "BOARD_TBL_NO") {
							html += '<th>' + keyList[i] + '</th>';
						}
					}
					html += '				</tr>';
					html += '			</thead>';
					html += '			<tbody>';
					for (var i = 0; i < dataList.length; i++) {
						html += '<tr>';
						for (var j = 0; j < keyList.length; j++) {
							if (keyList[j] != "BOARD_TBL_NO"  && keyList[j] != "FILE_YN") {
								// 정규식을 통한 html태그 관련된 정보 그대로 출력되도록 변경할 것
								html += '<td>' + dataList[i][keyList[j]]
										+ '</td>';
							} else if (dataList[i][keyList[j]] == "Y") {
								html += '<td><img src="/image/file_check_img.png" /></td>';
							} else {
								html += '<input type="hidden" name="'
										+ keyList[j] + '" value="'
										+ dataList[i][keyList[j]] + '"/>';
							}
						}
						html += '</tr>';
					}
					html += '			</tbody>';
					html += '			<tfoot>';
					html += '				<tr>';
					for (var i = 0; i < keyList.length; i++) {
						if (keyList[i] != "BOARD_TBL_NO") {
							html += '<th>' + keyList[i] + '</th>';
						}
					}
					html += '				</tr>';
					html += '			</tfoot>';
					html += '		</table>';
					html += '	</div>';
					html += '</div>';

					$('#tblContents').html(html);

					// $('#selecTblContents').dataTable({
					// "bPaginate": true,
					// "bLengthChange": true,
					// "bFilter": true,
					// "bSort": true,
					// "bInfo": true,
					// "bAutoWidth": false
					// });
				},
				error : function(e) {
					console.log(e);
				}
			});

	$(document).on(
			'click',
			'#selecTblContents tbody td',
			function() {
				var boardNo = $(this).parents('tr:first').find(
						'input[name=BOARD_TBL_NO]').val();
				console.log(boardNo);
			});
}