const search = document.getElementById('search'),
submit = document.getElementById('submit'),
random = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
resultHeading = document.getElementById('result-heading'),
single_mealEl = document.getElementById('single-meal');


// Search meal and fetch from API

function searchMeal(e) {
    e.preventDefault();

    // clear single meal 
    single_mealEl.innerHTML = '';

    // get search term 
    const term = search.value;

    // check for empty 
    if (term){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            resultHeading.innerHTML = `<h2>Search result for ${term} :</h2>`;
            console.log(data)
            mealsEl.innerHTML = data.meals.map( meal => 
                `
                <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"></img>
                <div class="meal-info data-mealID="${meal.isMeal}>${meal.strMeal}</div>
                </div>
                `
            );
            
        });

        // clear searchText
        search.value = '';
        
    } else {
        alert('Please enter a search term')
    }
}



//Event listeners 
submit.addEventListener('submit', searchMeal)