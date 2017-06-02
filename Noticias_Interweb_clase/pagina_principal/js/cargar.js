$(document).ready(function(){
	$('#botoncargar2').hide();
	$('#botoncargar').click(function(event) {
		$('#bloque2').slideDown( "slow", function() {
			$('#botoncargar').hide();
			$('#botoncargar2').show();
		});
	});
	$('#botoncargar2').click(function(event) {
		$('#bloque3').slideDown( "slow", function() {
			$('#botoncargar2').hide();
		});	
	});
});
