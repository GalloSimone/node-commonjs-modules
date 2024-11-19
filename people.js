const names =require("./names.js")



const hobbies =require("./hobbies.js")



function person() {
 const {firstname, lastname}=names("simone","gallo")
 const hobby=hobbies("hobby1", " hobby2", "hobby3")

 return{
    firstname,
    lastname,
    hobby
 };
};

const people =person();
console.log(people);














