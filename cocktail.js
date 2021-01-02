
var hardQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic&1";
var softQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic&1" ;
var rumQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum&1";
var tequilaQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila&1";
var whiskeyQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey&1";
var vodkaQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka&1";
var searchBtn = document.getElementById("drinkSearchBTN");


$("drinkSearchBTN").click(function(){
    var hardCheck = document.getElementsByName("hard-check") ;
    var softCheck = document.getElementById("soft-check") ;

    if (hardCheck = true){
        $.ajax({
            url: hardQueryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var hardArray = response.drinks[0];
            var randomHard = hardArray[Math.floor(Math.random()*hardArray.length)];
            document.getElementById("hard-check").innerHTML = randomHard ;

        })
    } else if (softCheck = true){
        $.ajax({
            url: softQueryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            var softArray = response.drinks[0];
            var randomSoft = softArray[Math.floor(Math.random()*softArray.length)];
            document.getElementById("soft-check").innerHTML = randomSoft;

        })
    }
})






$("drinkSearchBTN").click(function(){
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
            document.getElementsid("drink-results").innerHTML = randomRum;
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
            document.getElementsid("drink-results").innerHTML = randomTequila;
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
            document.getElementsid("drink-results").innerHTML = randomWhiskey;
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
            document.getElementsid("drink-results").innerHTML = randomVodka;
        })
    }
})




