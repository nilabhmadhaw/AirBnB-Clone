const express = require("express");
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

storeRouter.get('/',homesController.getIndex);
storeRouter.get('/mybookings',homesController.getmybookings);
storeRouter.get('/homes',homesController.getHomes);
storeRouter.get('/favourites',homesController.getfavouriteList);


module.exports = storeRouter;
