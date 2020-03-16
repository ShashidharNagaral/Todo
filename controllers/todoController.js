const todoService = require("../services/todoService");

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        todoService.showItem((error, items) => {
            res.render('todo', {
                data: items
            });
        });
    });

    app.post('/todo', function (req, res) {
        todoService.addItem(req.body, (e, o) => {
            console.log(o);
            res.send(true);
        });
    });
    app.delete('/todo/:item', function (req, res) {
        todoService.deleteItems(req.params.item, (e, o) => {
            if (e) {
                console.log(e);
            } else {
                console.log(o);
                res.send(true);
            }
        });
    });
};