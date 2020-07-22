const countryContainer = document.getElementById("country-container");
const selectRegion = document.getElementById("select-region");

async function test() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");

    const data = await response.json();
    return data;
}

// this works to remove the unwanted cards by region but needs to reload all countries back into the DOM
//might need to make addToDOM async so that it may be called every time it changes
// adding addToDOM to this event as it is does not work to refresh the DOM

// selectRegion.addEventListener('change', () => {
    
//     document.querySelectorAll('.card').forEach(card => {
//         if (!card.innerHTML.includes(`Region: ${selectRegion.value}`)) {
//             countryContainer.removeChild(card);
//         }

//     })
// })


// window.addEventListener('click', (e) => {
//     if (e.target.innerHTML.includes("Region: Asia")) {
//         console.log(e.target.innerHTML)
//     }
// })