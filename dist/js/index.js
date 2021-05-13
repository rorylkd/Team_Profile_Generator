const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");
const Engineer = require("./Engineer.js");

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
// There can only be one manager! Which is why the start function creates a new manager object from the Manager class.
// It also writes a div to the newfile.html file. This is dynamically generated using the user input.
// Then we're either taken back to the menu, or we exit.
function start() {
  // This writes the first part of the html to the file
  fs.appendFile(
    "../html/newfile.html",
    `<!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Team Profile" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="../css/style.css" />
      </head>
    
      <body>
        <header>My Team</header>
    
        <section class="container">`,
    (err) => {
      if (err) {
        console.log("Error");
      }
    }
  );
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const newManagerObject = new Manager(
      managerAnswers.managerName,
      managerAnswers.managerID,
      managerAnswers.managerEmail,
      managerAnswers.managerOfficeNumber
    );

    fs.appendFile(
      "../html/newfile.html",
      `   <div class="card">
            <p>${newManagerObject.name}</p>
            <p>${newManagerObject.constructor.name}</p>
            <p>ID: ${newManagerObject.id}</p>
            <p>Email: ${newManagerObject.email}</p>
            <p>Office Number: ${newManagerObject.officeNumber}</p>
          </div>
          `,
      (err) => {
        if (err) {
          console.log("Error");
        }
      }
    );

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

//Engineer function ceates a new engineer object from the engineer class.
// It also writes a div to the newfile.html file. This is dynamically generated using the user input.
// Then we're either taken back to the menu, or we exit.
function engineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const newEngineerObject = new Engineer(
      engineerAnswers.engineerName,
      engineerAnswers.engineerID,
      engineerAnswers.engineerEmail,
      engineerAnswers.engineerGithub
    );

    fs.appendFile(
      "../html/newfile.html",
      `   <div class="card">
            <p>${newEngineerObject.name}</p>
            <p>${newEngineerObject.constructor.name}</p>
            <p>ID: ${newEngineerObject.id}</p>
            <p>Email: ${newEngineerObject.email}</p>
            <p>Github Profile: ${newEngineerObject.github}</p>
          </div>
          `,
      (err) => {
        if (err) {
          console.log("Error");
        }
      }
    );

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
    const newInternObject = new Intern(
      internAnswers.internName,
      internAnswers.internID,
      internAnswers.internEmail,
      internAnswers.internSchool
    );
    fs.appendFile(
      "../html/newfile.html",
      `   <div class="card">
            <p>${newInternObject.name}</p>
            <p>${newInternObject.constructor.name}</p>
            <p>ID: ${newInternObject.id}</p>
            <p>Email: ${newInternObject.email}</p>
            <p>School: ${newInternObject.school}</p>
          </div>
          `,
      (err) => {
        if (err) {
          console.log("Error");
        }
      }
    );

    var choice = internAnswers.addTeamMember;
    if (choice === "Add another team member") {
      addTeamMember();
    } else {
      exit();
    }
  });
}
// This truncates the file so it starts empty
function init() {
  fs.truncate("../html/newfile.html", 0, () => {
    console.log("");
  });
}

// This function finishes up the html file.
function exit() {
  fs.appendFile(
    "../html/newfile.html",
    `</section>
    </body>
  </html>`,
    (err) => {
      if (err) {
        console.log("Error");
      }
    }
  );
}
init();
start();
