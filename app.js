const express = require('express');
const app = express();


app.get("/", function (req, res) {
    res.render("index.ejs")
});

app.use(express.static("public"))

app.set("view engine", "ejs")


app.listen(3000, () => {
    console.log("Server running on port 3000")
})