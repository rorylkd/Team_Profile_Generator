const inquirer = require("inquirer");
const fs = "fs";
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");
const Engineer = require("./Engineer.js");

//This empty array will be populated with the team member objects depending on user input
const teamMembersArray = [];

// We have several arrays of question objects below that are called depending on which inquirer prompt is called
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
// There can only be one manager! Which is why the start function creates a new manager object from the Manager class,
// then pushes that manager object onto the teamMembersArray. We go onto the menu function next, or the exit fucntion if the team is very small.
function start() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const newManagerObject = new Manager(
      managerAnswers.managerName,
      managerAnswers.managerID,
      managerAnswers.managerEmail,
      managerAnswers.managerOfficeNumber
    );
    teamMembersArray.push(newManagerObject);

    var choice = managerAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

//This function directs us to the engineer function or the intern function depending on which choice the user picked.
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

//Engineer function ceates a new engineer object from the engineer class and pushes it into the team array.
// Then we're either taken back to the menu, or we exit.
function engineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const newEngineerObject = new Engineer(
      engineerAnswers.engineerName,
      engineerAnswers.engineerID,
      engineerAnswers.engineerEmail,
      engineerAnswers.engineerGithub
    );
    teamMembersArray.push(newEngineerObject);

    var choice = engineerAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

// You get it
function intern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    // teamMembersArray.push(internAnswers);
    const newInternObject = new Intern(
      internAnswers.internName,
      internAnswers.internID,
      internAnswers.internEmail,
      internAnswers.internSchool
    );
    teamMembersArray.push(newInternObject);

    var choice = internAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}

// This function prints a nice message and spits out the array into the console so I can see it
function exit() {
  console.log("Your team profile has been generated!");
  console.log(teamMembersArray);
}

start();
exports.teamMembersArray = teamMembersArray;
