const Employee = require("./Employee");

class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    const officeless = officeNumber === "";
    if (officeless) {
      throw Error("Please provide an office number");
    }
// Super function is needed to extend manager from employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
