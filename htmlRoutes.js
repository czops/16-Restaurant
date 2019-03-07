// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  //simple /add allows a new user input form to appear when the user decides to input a new character
  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tabels", function (req, res) {
    res.sendFile(path.join(__dirname, "tabels.html"));
  });

};