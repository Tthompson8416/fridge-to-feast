const appId = "9a69a94c";
const appKey = "63a596b84513443fc062e1e803e21980";
const baseUrl = ``;

function loadRecipies(type = "paneer") {
    const url = baseUrl + `&q=${type}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.hits))
    .catch((error) => console.log(error));
}
loadRecipies();