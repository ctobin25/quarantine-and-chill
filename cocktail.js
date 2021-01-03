const searchBtn = document.getElementById("drinkSearchBTN");
const drinkResults = document.getElementById("drink-name");
const inGredList = document.getElementById("ingred");
const drinkIng1EL = document.getElementById("drinkIng1");
const drinkIng2EL = document.getElementById("drinkIng2");
const drinkIng3EL = document.getElementById("drinkIng3");
const howTo = document.getElementById("howTo");
const drinkInstEL = document.getElementById("drinkInst");
const drinkImgEL = document.getElementById("drink-thumb")

function getCocktails(){
    let randomQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?&1"
    $.ajax({
        url: randomQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.drinks[0].strDrink);
        console.log(response.drinks[0].strIngredient1)
        console.log(response.drinks[0].strIngredient2)
        console.log(response.drinks[0].strIngredient3)
        console.log(response.drinks[0].strInstructions)
        drinkResults.innerHTML = response.drinks[0].strDrink;
        drinkImgEL.setAttribute("src", response.drinks[0].strDrinkThumb);
        inGredList.innerHTML = "Ingredient List: ";
        drinkIng1EL.innerHTML = response.drinks[0].strIngredient1;
        drinkIng2EL.innerHTML = response.drinks[0].strIngredient2;
        drinkIng3EL.innerHTML = response.drinks[0].strIngredient3;
        howTo.innerHTML = "How to make: ";
        drinkInstEL.innerHTML = response.drinks[0].strInstructions;
        
    })
}


searchBtn.addEventListener("click", function(){
    getCocktails(); 
});


