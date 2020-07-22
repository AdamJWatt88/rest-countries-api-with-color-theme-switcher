const express = require('express');
const app = express();
const request = require('request');


async function addToDOM() {
    const response = await fetch("https://restcountries.eu/rest/v2/all")
    const data = await response.json()
    data.forEach((data) => {
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
}

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    let url = "https://restcountries.eu/rest/v2/all"
    request(url, (error,response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body)
            res.render('index.ejs', { data: data} )
        } 
    } )
});

app.get("/region-selector", (req, res) => {
    let query = req.body.selectRegion;
    let url = `https://restcountries.eu/rest/v2/region/${query}`
    console.log(query)
    request(url, (error,response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body)
            res.render('index.ejs', { data: data} )
        } 
    } )

})

app.post("/region-selector", function (req, res) {
        // let region = req.body.region

        res.render('region.ejs')
    }
)


app.listen(3000, () => {
    console.log("Server running on port 3000")
})