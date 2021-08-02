const mongoose = require("mongoose");

class MongoDB {
  /**
   * 
   * @param {*} _config 
   *  const config = {
  USERNAME: "admin",
  PASSWORD: "test0000",
  URL: "cluster0.upquf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};
   */
  constructor({ USERNAME, PASSWORD, URL }) {
    this.USERNAME = USERNAME;
    this.PASSWORD = PASSWORD;
    this.URL = URL;
    // this.Connect();
  }

  Connect() {
    mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true });
    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }

  List(DATABASE, COLLECTION) {
    let data = require("./data");
    return data;
  }
}

module.exports = MongoDB;
