
const Home = require("../models/home");


exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPath: "/homes"
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
      currentPath: "/",
    });
  });
};

exports.getmybookings = (req, res, next) => {
    res.render("store/mybookings", {
      pageTitle: "My bookings",
      currentPath: "/mybookings",
    });
};


exports.getfavouriteList = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("store/favourite-list", {
            registeredHomes: registeredHomes,
            pageTitle: "My Favourites",
            currentPath: "/favourites",
        });
    });
};