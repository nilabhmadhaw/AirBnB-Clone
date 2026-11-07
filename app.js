const path = require('path');
//External Module
const express =  require("express");

//Local Module
const storeRouter = require("./routes/storeRouter.js");
const hostRouter = require("./routes/hostRouter.js");
const rootDir = require('./utils/pathUtil');
const errorsController = require("./controllers/errors");

const app = express();


app.set('view engine','ejs');
app.set('views','views');


app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});

app.use((req,res,next)=>{
    res.locals.currentPath = req.path;
    next();
});

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir,'public' )));

app.use(storeRouter);
console.log("STORE ROUTER REGISTERED");
app.use('/host',hostRouter);

app.use(errorsController.pageNotFound);
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});