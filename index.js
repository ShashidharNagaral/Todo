const express = require('express');
const connection = require('./dbConnection');
const util = require("./utils");
const app = express();
const bodyparser = require("body-parser");
const todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(express.static('./public'));

todoController(app);

async function start() {
    await connection.connecttoDB((e, o) => {
        console.log(o);
    });
    app.listen(util.DB_PORT, util.DB_HOST, () => {
        console.log("server started");
    });
}
start();