const registerdHomes = [];


exports.getAddHome =  (req,res,next)=>{
 res.render('addHome',{
    pageTitle:'Add Home'
});
};

exports.postAddHome = (req,res,next)=>{
    console.log('Home registation successfull for:',req.body.houseName);
    registerdHomes.push({
    houseName: req.body.houseName,
    location: req.body.location,
    price: req.body.price,
    image: req.body.image,
    ratings: req.body.ratings,
    bedrooms: req.body.bedrooms,
    description: req.body.description
});
     res.render('homeAdded',{pageTitle:'Home Added'});
};

exports.getHomes = (req,res,next)=>{
    console.log(registerdHomes);
    res.render('home',{registerdHomes: registerdHomes, pageTitle:'airbnb Home'})
};
 