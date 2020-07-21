const countryContainer = document.getElementById("country-container");
const selectRegion = document.getElementById("select-region");

let cards = [];

async function test() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    const data = await response.json();
    return data;
}

fetch("https://restcountries.eu/rest/v2/all")
    .then((data) => data.json())
    .then((data) => {
        data.forEach( (data) => {
            cards.push(`
  <div class="card">
    <img src="${data.flag}" alt="${data.name}"/>
    <h3>${data.name}</h3>
    <span>Population: ${data.population}</span>
    <span>Region: ${data.region}</span>
    <span>Capital: ${data.capital}</span>
  </div> 
  `);
        });

        countryContainer.innerHTML = cards.join(" ");
    });
