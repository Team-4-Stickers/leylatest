// Requiring our models and passport as we've configured it
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    // Render the profile page:
    app.get("/members", isAuthenticated, function (req, res) {

        db.Gift.findOne({ where: { giftName: req.user.giftName } }).then(function (giftObject) {

            console.log(giftObject);

            // var hbsObject = {
            //     gift: {
            //         giftObject
            //     }
            // };

            res.render("index", giftObject);

        });
    });

    // Render the add new event page:
    app.get("/new", isAuthenticated, function (req, res) {

        res.render("new", {});

    });

    // Render the gitf page
    app.get("/gifts", isAuthenticated, function (req, res) {

        res.render("gifts", {});

    });

    //Render the join page
    app.get("/join", isAuthenticated, function (req, res) {

        var hbsObject = {
            event: {
                eventName: "Galentine's Day",
                eventDate: '2019-01-27',
                eventTime: '10:00',
                eventLocation: 'NW',
                eventDirections: ' Do what I say, buy gifts!',
                uniqueCode: '6852'
            }
        };

        res.render("join", hbsObject);

    });

};