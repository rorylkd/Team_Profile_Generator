const Employee = require("./Employee");
class Engineer extends Employee{
  constructor(name, id, email, github) {
    const githubless = github === "";
    if (githubless) {
      throw Error("Please provide a github");
    }
  // Super function is needed to extend engineer from employee class
    super(name, id, email);
    this.github = github;
  }
  getGithub(github){`${github}`};
  getRole(){
      return "Engineer";
  };
}

module.exports = Engineer;