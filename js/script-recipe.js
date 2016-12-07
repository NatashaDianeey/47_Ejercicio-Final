/* Etapa 7 */
$(document).ready( function(){
    
    /* Etapa 10 */
    $('.js-back').on('click', function() {
        window.location = 'index.html';
    });

    $('.js-menu').hide();
    console.log('Esta listo el documento');
    
    /* Etapa 8 */
    $('.js-show-recipe').on('click', function() {
 		$('.page.recipe').removeClass('make');
        
        /*Etapa 9*/
        $('.js-show-recipe').addClass('active');
 		$('.js-show-make').removeClass('active');  
 	});
 
 	$('.js-show-make').on('click', function() {
 		$('.page.recipe').addClass('make');
 	
        /*Etapa 9*/
        $('.js-show-make').addClass('active');
        $('.js-show-recipe').removeClass('active');
    });
});
