const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search");
const resultsList = document.querySelector("#results");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchRecipes();
})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch("https://api.edamam.com/search?q=${searchValue}&app_id=9a69a94c&app_key=63a596b84513443fc062e1e803e21980&from=0&to=10");
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = "";
    recipes.forEach((recipe) => {
        html += `
        <div>
        img src="${recipe.recipe.image}" alt="${recipe.recipe.lsbel}">
        <h3>${recipe.recipe.label}</h3>
        <ul>
        <a href="${recipe.recipe.ingredientLines.map(ingredient => "<li>${ingredient}</li>")}
        </ul>
        <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div>
        `
})
resultsList.innerHTML = html;
}
