
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home to Airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const home = new Home(
    req.body.houseName,
    req.body.location,
    req.body.price,
    req.body.image,
    req.body.ratings,
    req.body.bedrooms,
    req.body.description
  );

  home.save();

  res.render("host/homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

