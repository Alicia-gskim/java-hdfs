/**
 * http://usejsdoc.org/
 */

$(function(){
	
	$('a').on('click', function(){
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
});