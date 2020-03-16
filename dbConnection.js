var mongoose = require("mongoose");
const util = require("./utils");
exports.connecttoDB = async callback => {
    //if connection is already established
    if (mongoose.connection.readyState) {
        callback(undefined, {
            msg: "connected",
            code: "200"
        });
        return;
    }
    // connect to db
    await mongoose.connect(util.DB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    // after successfully connecting
    mongoose.connection.on("connected", () => {
        callback(undefined, {
            msg: "connected",
            code: "200"
        });
    });
    // error while connecting database
    mongoose.connection.on("error", err => {
        console.log("Error connecting to DB" + err);
        callback(err);
    });
};