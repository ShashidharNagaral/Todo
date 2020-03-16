const Todo = require("../schema/todo");
exports.addItem = (obj, callback) => {
    let todo = new Todo({
        item: obj.item,
        timestamp: new Date().getTime()
    });
    todo.save(callback);
};

exports.showItem = (callback) => {
    Todo.find(callback);
};

exports.deleteItems = (item, callback) => {
    let data = item.replace(/-/g, ' ');
    Todo.findOneAndDelete({
        item: data
    }, callback);
};