const inquirer = require("inquirer");
const fs = "fs";

const teamMembersArray = [];

const initialQuestions = [
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
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
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
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
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
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
  },
];

function start() {
  inquirer.prompt(initialQuestions).then((initialAnswers) => {
    // console.log("initialAnswers:", initialAnswers);
    teamMembersArray.push(initialAnswers);

    var choice = initialAnswers.addTeamMember;
    if (choice === "Add an engineer") {
      engineer();
    } else if (choice === "Add an intern") {
      intern();
    } else if (choice === "Finish building team") {
      exit();
    }
  });
}

function engineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    // console.log("engineerAnswers:", engineerAnswers);
    teamMembersArray.push(engineerAnswers);

    var choice = engineerAnswers.addTeamMember;
    if (choice === "Add an engineer") {
      engineer();
    } else if (choice === "Add an intern") {
      intern();
    } else if (choice === "Finish building team") {
      exit();
    }
  });
}

function intern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    // console.log("internAnswers:", internAnswers);
    teamMembersArray.push(internAnswers);

    var choice = internAnswers.addTeamMember;
    if (choice === "Add an engineer") {
      engineer();
    } else if (choice === "Add an intern") {
      intern();
    } else if (choice === "Finish building team") {
      exit();
    }
  });
}

function exit() {
  console.log('Your team profile has been generated!');
  console.log(teamMembersArray);
}

start();
