		$('#stroke-form').submit(function(e) {
			e.preventDefault();
			var $val = $('input:first').val();
			$( ".thank-you-wrapper p" ).each(function( p ) {
 				$('p').text($val).attr('title', function(){
		 			return $(this).html();
		  	});
			});
		});