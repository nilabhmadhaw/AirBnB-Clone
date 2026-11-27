const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const homeDataPath = path.join(rootDir,'data','homes.json');


module.exports = class Home {
    constructor(houseName,location,price,image,ratings,bedrooms,description){
        this.houseName = houseName;
        this.location = location;
        this.price = price;
        this.image = image
        this.ratings = ratings;
        this.bedrooms = bedrooms;
        this.description = description;
    }

    save(){
        this.id = Math.random().toString();
        Home.fetchAll(registerdHomes => {
        registerdHomes.push(this);
        
        fs.writeFile(homeDataPath, JSON.stringify(registerdHomes),error=>{
            console.log("File Writing Concluded", error);
        });
        })
    }

    static fetchAll(callback){
        fs.readFile(homeDataPath,(err,data)=>{
           callback(!err ? JSON.parse(data) : []);
        });
    }

    static findById(homeId,callback){
        this.fetchAll(homes=>{
          const homeFound =  homes.find(home=>home.id===homeId);
          callback(homeFound);
        })
    }
};