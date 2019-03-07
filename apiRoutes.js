// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

//define here to avoid scope issues
var customers = [
    {
    name: "obiwankenobi",
    phone: "Jedi Master",
    email: "Obi Wan Kenobi",
    uniqueID: 55

  },
];

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    // Routes you to the JSON contained in the express server for the reserved tables

    app.get("/api/tabels", function (req, res) {
        return res.json(customers);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(customers);
    });


    // Create New Characters - takes in JSON input
    app.post("/api/customers", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newCustomer= req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

        console.log(newCustomer);

        customers.push(newCustomer);

        res.json(newCustomer);
    });

};




