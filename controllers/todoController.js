var bodyParser = require('body-parser');

var data = [{item: 'write notes'}, {item: 'pay the college fees'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        res.render('todo', {data: data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.send(true);
        // res.render('todo', {data: data});
    });
    app.delete('/todo/:item', function(req, res) {
        let value = req.params.item;
        for(let i=0;i<data.length;i++) {
            if(data[i].item.replace(/ /g, "-") === value) {
                data.splice(i,1);
                res.send(true);
            }
        }
    });
};