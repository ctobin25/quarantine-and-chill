const mealSearchBtn = document.getElementById("mealSearchBTN");
const mealResults = document.getElementById("meal-name");
const inGredsList = document.getElementById("ingred");
const mealIng1EL = document.getElementById("mealIng1");
const howToMake = document.getElementById("howTo");
const mealInstEL = document.getElementById("mealInst");
const mealImgEL = document.getElementById("meal-thumb")

function getMeals(){
    let randomMealQueryURL = "https://www.themealdb.com/api/json/v1/1/random.php?&1"
    $.ajax({
        url: randomMealQueryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.meals[0].strMeal);
        //console.log(response.meals[0].strIngredients1)
        console.log(response.meals[0].strInstructions)
        mealResults.innerHTML = response.meals[0].strMeal;
        mealImgEL.setAttribute("src", response.meals[0].strMealThumb);
        //inGredsList.innerHTML = "Ingredients List: ";
        //mealIng1EL.innerHTML = response.meals[0].strIngredients1;
        howToMake.innerHTML = "How to make: ";
        mealInstEL.innerHTML = response.meals[0].strInstructions;
        
    })
}


mealSearchBtn.addEventListener("click", function(){
    getMeals(); 
});