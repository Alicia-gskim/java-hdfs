/**
 * http://usejsdoc.org/
 */

$(function(){
	
	console.log("111111");
	
	$('button').on('click', function(){
		console.log("Some button click");
		var name = this.name;
		
		if(name == "create") {
			location.href = "/oracle/createTbl";
		} else if(name == "write") {
			location.href = "/oracle/writeData";
		} else if(name == "move") {
			location.href = "/oracle/move";
		} else if(name == "board") {
			location.href = "/oracle/viewBoard";
		}
	});
	
//	$('#moveBtn').on('click', function(){
//		location.href = "/oracle/writeData";
//	});
//	
//	$('#createBtn').on('click', function(){
//		location.href = "/oracle/createTbl";
//	});
//	
//	$('#writeBtn').on('click', function(){
//		location.href = "/oracle/writeData";
//	});
	
	
});