/**
 * http://usejsdoc.org/
 */

$(function() {
	'use strict';

	$('#fileupload').fileupload();

	if($('input[name=fullPath]').val() == ""){
		$('input[name=fullPath]').val("/");
	}
	var data = {
			data : $('input[name=fullPath]').val()
	};
	
	uploadFunc(data);
});

function uploadFunc(data) {
	console.log(data);
	if (window.location.hostname === 'localhost') {
		$('#fileupload').addClass('fileupload-processing');

		$.ajax({
			url : $('#fileupload').fileupload('option', 'url'),
			dataType : 'json',
			context : $('#fileupload')[0],
			data : data
		}).always(function() {
			$(this).removeClass('fileupload-processing');
		}).done(function(result) {
			$(this).fileupload('option', 'done').call(this, $.Event('done'), {
				result : result
			});
		});
	}
}