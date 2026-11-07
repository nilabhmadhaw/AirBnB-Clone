
const Home = require("../models/home");


exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPath: req.path
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
      currentPath: req.path
    });
  });
};

exports.getmybookings = (req, res, next) => {
    res.render("store/mybookings", {
      pageTitle: "My bookings",
      currentPath: req.path,
    });
};


exports.getfavouriteList = (req, res, next) => {
    res.render("store/favorite-list", {
      pageTitle: "My Favourites",
      currentPath: req.path,
    });
};