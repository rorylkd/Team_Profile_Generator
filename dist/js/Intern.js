const Employee = require("./Employee");

class Intern extends Employee{
  constructor(name, id, email, school) {
    const schoolless = school === "";
    if (schoolless) {
      throw Error("Please provide a school");
    }
// Super function is needed to extend intern from employee class
    super(name, id, email);
    this.school = school;
  }
  getSchool(school) {
    `${school}`;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
