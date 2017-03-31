/**
 * home.js
 */
$a.page(function(){
	this.init = function(id, param) {
		console.log("id : "+id);
		console.log("param : " + param);
		
		//화면 데이터 바인딩
		$a.page.method='POST';
		$('#content').setData(param);
		
		//화면 이벤트 바인딩 함수 호출
		setEventListener();
	};

	function setEventListener() {
		//페이지 이동 이벤트
		$('a').click(function(){
			var name = this.name;
			console.log(name);
			if(name == 'hdfsPage'){
				$a.navigate('hdfsHome');
			} else if(name == 'alopexPage'){
				$a.navigate('portalType');
			} else if(name == 'oraclePage'){
				$a.navigate('oracle/mainPage');
			}
		});
	}
});
