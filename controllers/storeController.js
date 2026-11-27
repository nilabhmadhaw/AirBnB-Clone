
const Home = require("../models/home");


exports.getHomes = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/home-list", {
      registeredHomes: registerdHomes,
      pageTitle: "Homes List",
      currentPath: "/homes"
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerdHomes) => {
    res.render("store/index-list", {
      registerdHomes: registerdHomes,
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
    Home.fetchAll((registerdHomes) => {
        res.render("store/favourite-list", {
            registeredHomes: registerdHomes,
            pageTitle: "My Favourites",
            currentPath: "/favourites",
        });
    });
};

exports.getHomeDetails = (req, res, next) => {
const homeId = req.params.homeId;
console.log("At home details page",homeId);
Home.findById(homeId,home =>{
  console.log("Home details found",home);
   res.render("store/home-detail", {
      pageTitle: "Home Detail",
      currentPage: "/Home",
    });
})
};
