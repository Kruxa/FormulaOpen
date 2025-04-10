const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.use(express.static(__dirname));
app.listen(5002, () => {});