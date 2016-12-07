$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
    $('.js-back').hide();
    printNews();
    renderHighlightedRecipes(recipesArray);
    
    renderActivities(activities);
});

/* Etapa 2 */
 function printNews(){
        $(".callout-news p").text("NUEVAS RECETAS");
       
    };
    
   
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
/* Etapa 3 */
function renderHighlightedRecipes() {
  
    $.each( recipesArray, function( key, value ) {
        if(value.highlighted==true){
            renderRecipe(value);
        };
    });
};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
/* Etapa 4 */
function renderRecipe(recipe) {
    
    var item = $("<a class='item-recipe' href='#'></a>");
    
    var attribution = $("<span class='attribution'></span>");
    
    var title = $("<span class='title-recipe'></span>");
    title.text(recipe.title);
    
    var metadata = $("<span class='metadata-recipe'></span>");
    
    var author = $("<span class='author-recipe'></span></span>");
    author.text(recipe.source.name);
    
    var bookmarks = $("<span class='bookmarks-recipe'></span>");
    
    var icon = $("<span class='icon-bookmark'></span> ");
    
    var img= $("<img/>");
    img.attr('src', 'img/recipes/320x350/' + recipe.name + '.jpg');

    item.append(attribution);
    attribution.append(title);
    attribution.append(metadata);
    metadata.append(author);
    metadata.append(bookmarks);
    bookmarks.append(icon);
    item.append(img);
    
    
    $('.list-recipes').append(item);

}

/*
* Función que se encarga de pintar todas las actividades
*/
/* Etapa 5 */
function renderActivities(activitiesArray) {
  	console.log('Activities: ', activitiesArray);
 	
   
    $.each( activitiesArray, function( key, value ){
        renderActivity(value);
    });
     if(activitiesArray.length>0){
        $('div .wrapper-message').hide();
    }
    
  };

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
/* Etapa 6 */
function renderActivity(recipe) {
	var templateActivity = 
        '<a href="#" class="item-activity">' +
            '<span class="attribution">' +
                '<span class="avatar">' +
                    '<img src="<%= userAvatar %>" class="image-avatar">' +
                '</span>' +
                '<span class="meta">' +
                    '<span class="author"> <%= userName %> </span> made' +
                    '<span class="recipe"> <%= recipeName %> </span>: ' +  
                    '<span class="location"> <%= place %> </span>' +
                '</span>' +
            '</span>' +
            '<div class="bg-image" style="background-image: url(&quot;<%= image %>&quot;)"></div>' +
        '</a>';

	var guardaTodo = _.templateActivity(templateActivity);
  
	var enlace = guardaTodo(activity);
	console.log(templateActivity);
  
	var elemento = $(enlace);
	$('.list-activities').append(elemento);
}

