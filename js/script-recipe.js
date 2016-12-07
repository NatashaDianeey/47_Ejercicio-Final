/* Etapa 7 */
$(document).ready( function(){

    $('.js-menu').hide();
    console.log('Esta listo el documento');
    
    /* Etapa 8 */
    $('.js-show-recipe').on('click', function() {
 		$('.page.recipe').removeClass('make');
 	});
 
 	$('.js-show-make').on('click', function() {
 		$('.page.recipe').addClass('make');
 	});
    
});