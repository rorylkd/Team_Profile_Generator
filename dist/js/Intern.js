const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;
  }
  getSchool(school){`${school}`};
  getRole(){
      return "Intern";
  };
}


module.exports = Intern;