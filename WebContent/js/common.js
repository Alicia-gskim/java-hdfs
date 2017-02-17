/**
 * http://usejsdoc.org/
 */

$a.page(function(){
	this.init = function(id, param) { 
		setEventListener();
	};

	function setEventListener() {
		$('a').click(function(){
			var name = this.name;
			console.log(name);
			if(name == 'portalType'){
				$a.navigate('portalType');
			} else if(name == 'workspaceType'){
				$a.navigate('workspaceType');
			} else if(name == 'back'){
				$a.navigate('/selectPage');
			}
		});
	}
});