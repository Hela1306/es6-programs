var userdata = {
    name: "Hela",
    age: 19,
    mobile: 3476471
}
//Print stuff
console.log(userdata)
console.log(userdata.name)
console.log(userdata.age)
console.log(userdata.mobile)

//add stuff
userdata.email = "helawordsworth@gmail.com"
console.log(userdata.email)

//modify stuff
userdata.mobile = 000011192
console.log(userdata.mobile)

//delete stuff
delete userdata.mobile;
console.log(userdata)