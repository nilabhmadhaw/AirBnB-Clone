
//Fake Database
const registerdHomes = [];

module.exports = class Home {
    constructor(houseName,location,price,image,guests,bedrooms,description){
        this.houseName = houseName;
        this.location = location;
        this.price = price;
        this.image = image
        this.guests = guests;
        this.bedrooms = bedrooms;
        this.description = description;
    }

    save(){
        registerdHomes.push(this);
    }
}