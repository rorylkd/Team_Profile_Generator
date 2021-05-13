const inquirer = require("inquirer");
const fs = "fs";
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");
const Engineer = require("./Engineer.js");

const teamMembersArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your managers name?",
  },

  {
    type: "input",
    name: "managerID",
    message: "What is your managers ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your managers email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your managers office number?",
  },

  {
    type: "list",
    name: "addTeamMember",
    message: "What would you like to do?",
    choices: ["Add another team member", "Finish building team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineers name?",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is your engineers ID?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineers email adress?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is your engineers Github username?",
  },
  {
    type: "list",
    name: "addTeamMember",
    message: "What would you like to do?",
    choices: ["Add another team member", "Finish building team"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is your interns name?",
  },
  {
    type: "input",
    name: "internID",
    message: "What is your interns ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your interns email address?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your interns school?",
  },
  {
    type: "list",
    name: "addTeamMember",
    message: "What would you like to do?",
    choices: ["Add another team member", "Finish building team"],
  },
];

const whichEmployee = [
  {
    type: "list",
    name: "addTeamMember",
    message: "What would you like to do?",
    choices: ["Add an intern", "Add an engineer"],
  },
];

function start() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    // teamMembersArray.push(initialAnswers);
    const newManagerObject = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber)
    teamMembersArray.push(newManagerObject);

    var choice = managerAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

function engineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    // teamMembersArray.push(engineerAnswers);
    const newEngineerObject = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerID, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
teamMembersArray.push(newEngineerObject);

    var choice = engineerAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

function intern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    // teamMembersArray.push(internAnswers);
    const newInternObject = new Intern(internAnswers.internName, internAnswers.internID, internAnswers.internEmail, internAnswers.internSchool);
teamMembersArray.push(newInternObject);

    var choice = internAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

function addTeamMember() {
  inquirer.prompt(whichEmployee).then((whichEmployeeAnswers) => {
    var choice = whichEmployeeAnswers.addTeamMember;
    if (choice === "Add an engineer") {
      engineer();
    } else if (choice === "Add an intern") {
      intern();
    }
  });
}

function exit() {
  console.log("Your team profile has been generated!");
  console.log(teamMembersArray);
}

start();
exports.teamMembersArray = teamMembersArray;