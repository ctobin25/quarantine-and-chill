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

// add button to make sure the calls will work  
getNonAlc();
getCocktails();


searchBtn.addEventListener("click", function(){
    var hardCheck = document.getElementsByName("hard-check") ;
    var softCheck = document.getElementById("soft-check") ;
    // result.innerText = to push the modal look at notes 
    if (hardCheck = true){

    } else if (softCheck = true){

    }

})

searchBtn.addEventListener("click", function(){
    var rumCheck = document.getElementById("rum-check");
    var tequilaCheck = document.getElementById("tequila-check");
    var whiskeyCheck = document.getElementById("whiskey-check");
    var vodkaCheck = document.getElementById("vodka-check");
    //result.innertext = to push the modal look at notes 
    if (rumCheck = true){

    } else if(tequilaCheck = true){

    }else if(whiskeyCheck = true){
        
    }else if(vodkaCheck = true){
        
    }


    
})