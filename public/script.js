const countryContainer = document.getElementById("country-container");
const selectRegion = document.getElementById("select-region");


async function test() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    const data = await response.json();
    return data;
}

// window.addEventListener('click', (e) => {
//     if (e.target.innerHTML.includes("Region: Asia")) {
//         console.log(e.target.innerHTML)
//     }
// })
