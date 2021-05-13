const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;
  }
  getGithub(github){`${github}`};
  getRole(){
      return "Engineer";
  };
}

module.exports = Engineer;