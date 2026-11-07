const express = require("express");
const storeRouter = express.Router();

const homesController = require("../controllers/storeController");

storeRouter.get('/',homesController.getHomes);
storeRouter.get('/mybookings',homesController.getmybookings);
storeRouter.get('/index-list',homesController.getIndex);
storeRouter.get('/favourite-list',homesController.getfavouriteList);


module.exports = storeRouter;
