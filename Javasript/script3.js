const app_id = '9a69a94c';
const app_key = '63a596b84513443fc062e1e803e21980';
const recipe_name = 'chicken';

fetch(
    `https://api.edamam.com//search?q=${recipe_name}&app_id=${app_id}&app_key=${app_key}`
)
    .then((response) => response.json())
    .then((data) => console.log(data.hits))
    .catch((error) => console.error(error));