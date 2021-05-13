class Employee {
    constructor(name, id, email){
const nameless =
name === ""; 
const emailless = 
email === "";
const idless = 
id === "";

if (nameless){
    throw Error("Please provide a name");
}
if (emailless){
    throw Error("Please provide an email")
}
if (idless){
    throw Error("Please provide an id")
}



    }


    

}


module.exports = Employee;