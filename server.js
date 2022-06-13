const express = require("express");
const app = express();
// First of all you require Express

app.get("/", (request, response) => {
  response.send("Hi, This Is A Tutorial Api . . .");
});
// Now you setup a GET route at / which is basically
// the Homepage of your app

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
// And Finally you make the app listen to a port.
// MongoDB Configurations 
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.eo2wg.mongodb.net/playerData?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection To MongoDB Atlas Successful!");
});