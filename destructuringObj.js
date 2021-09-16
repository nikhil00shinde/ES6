// this is use to short the access of value in object

let add = {
    city:"Delhi",
    region:"Pitampaura",
    pin:110001,
};

// console.log(add.city);
// console.log(add.region);
// console.log(add.pin);


console.log("This process is called destructing of Object");

let {region , pin, city, state} = add; //variable declaration using destructing
// variable and key name should be same

console.log(region);
console.log(city);
console.log(pin);

console.log(state); // will give undefined because the variable is created but in that add object their is no state value


