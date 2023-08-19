const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/src/pages')));
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, '/src/components')));
app.use('/assets',express.static(path.join(__dirname, '/src/assets')));


app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404 not found. . .</h1>`);
})

app.listen(3000, () => {
    console.log("App listening on port 3000 😁")
})