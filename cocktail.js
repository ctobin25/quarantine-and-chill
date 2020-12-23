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
    // is alcohol tre

    // look at giphy conditional 
    
    if (hardCheck = true){

    } else if (softCheck = true){

    }

})

var rumQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum&1";
var tequilaQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila&1";
var whiskeyQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey&1";
var vodkaQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka&1";

searchBtn.addEventListener("click", function(){
    var rumCheck = document.getElementById("rum-check");
    var tequilaCheck = document.getElementById("tequila-check");
    var whiskeyCheck = document.getElementById("whiskey-check");
    var vodkaCheck = document.getElementById("vodka-check");
    //result.innertext = to push the modal look at notes 

    if (rumCheck = true){
        $.ajax({
            url: rumQueryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var rumArray = response.drinks[0];
            var randomRum = rumArray[Math.floor(Math.random()*rumArray.length)]
            
        })
    }

    else if(tequilaCheck = true){
        $.ajax({
            url: tequilaQueryURL,
            method: "GET"
        }).then(function(response){
        console.log(response)
        var tequilaArray = response.drinks[0];
        var randomTequila = tequilaArray[Math.floor(Math.random()*tequilaArray.length)]

        })

    }

    else if(whiskeyCheck = true){
        $.ajax({
            url: whiskeyQueryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var whiskeyArray = response.drinks[0];
            var randomWhiskey = whiskeyArray[Math.floor(Math.random()*whiskeyArray.length)]

        })
        
    }

    else if(vodkaCheck = true){
        $.ajax({
            url: vodkaQueryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var vodkaArray = response.drinks[0];
            var randomVodka = vodkaArray[Math.floor(Math.random()*vodkaArray.length)]

        })

    }


    
})