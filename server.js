const express = require('express');
const app = express();
const PORT = 8080;

// listen requests on port 8080:
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
// Response "Hello world!" for request to URL ('/') with method "GET"
app.get('/', (req, res) => {
    res.send("Hello world!");
});