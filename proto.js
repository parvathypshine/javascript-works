var baleno={
    varient:"petrol",
    name:"baleno",
    price:"9l",
    break:"abs",
    brand:"nexa",
    getPrice(){
        return this.price
    }

}

var glanza={
    name:"glanza",
    brand:"toyotta",
    price:"10l"
}

glanza.__proto__=baleno
console.log(glanza.getPrice());
