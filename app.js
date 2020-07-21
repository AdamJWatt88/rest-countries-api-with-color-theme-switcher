const express = require('express');
const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"))




app.get("/", function (req, res) {
    res.render("index.ejs")
});

app.post("/region-selector", function (req, res) {
        // let region = req.body.region

        res.render('region.ejs')
    }
)


app.listen(3000, () => {
    console.log("Server running on port 3000")
})