var userdata = {
    name: "Hela",
    gender: "Female",
    mobile: 986622222
}
//Print stuff
console.log(userdata)

//Object to string
var mydata = JSON.stringify(userdata)
console.log(mydata)

//String to object
var finaldata = JSON.parse(mydata)
console.log(finaldata)