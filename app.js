const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    let url = "https://restcountries.eu/rest/v2/all";
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("index.ejs", {
                countries: data
            });
        }
    });
});

app.get("/back", (req, res) => {
    let url = "https://restcountries.eu/rest/v2/all";
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("index.ejs", {
                countries: data
            });
        }
    });
});

app.get("/search", (req, res) => {
    let query = req.query.search;
    let url = `https://restcountries.eu/rest/v2/name/${query}`

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("index.ejs", {
                countries: data
            });
        }
    });
})

app.get("/regionSelector", (req, res) => {
    let query = req.query.selectRegion;
    let url = `https://restcountries.eu/rest/v2/region/${query}`;

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("index.ejs", {
                countries: data
            });
        }
    });
});

app.get("/region", (req, res) => {
    let query = req.query.alphaCodes;
    let url = `https://restcountries.eu/rest/v2/alpha/${query}`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("region.ejs", {
                country: data
            });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});