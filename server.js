const express = require('express');
const exphbs = require('expres-handlebars')

const PORT = process.env.PORT || 8080;

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server listening at http://localhost:8080");
})