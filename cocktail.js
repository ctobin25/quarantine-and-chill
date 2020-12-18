//var cocktail = $(this).attr("data-name");
var spiritOp1 = document.getElementById(".container") // need to change the class selector
var spiritOp2 = document.getElementById(".container") // need to change the class selector
var spiritOp3 = document.getElementById(".container") // need to change the class selector
var spiritOp4 = document.getElementById(".container") // need to change the class selector
                //example  $("#.container").text("Whiskey")

var cocktailQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka&1";
var cocktailDefinedQueryURL =  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15300&1";

function getCocktails(){
$.ajax({
    url: cocktailQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.drinks[0].idDrink);
    //$("#cocktail-view".text(JSON.stringify(response)));
    


})

$.ajax({
    url: cocktailDefinedQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response) // grabs drink id
    console.log(response.drinks[0].strDrink)
    console.log(response.drinks[0].strIngredient1) // to grab first ingredient 



})
}
getCocktails();




// take grab the info that is needed for the check marks