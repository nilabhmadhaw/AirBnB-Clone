const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');


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
        Home.fetchAll(registereddHomes => {
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir,'data','homes.json');
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes),error=>{
            console.log("File Writing Concluded", error);
        });
        })
    }

    static fetchAll(callback){

        const homeDataPath = path.join(rootDir,'data','homes.json');
        fs.readFile(homeDataPath,(err,data)=>{
           callback(!err ? JSON.parse(data) : []);
        });
    }
} 