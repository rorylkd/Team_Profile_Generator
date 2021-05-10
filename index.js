const inquirer = require("inquirer");
const fs = "fs";

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
];

function start(){
    inquirer.prompt(initialQuestions).then((initialAnswers) => {
        console.log(initialAnswers);

        var choice = initialAnswers.addTeamMember;
        if (choice === 'Add an engineer') {
    
        } else if (choice === 'Add an intern') {

        }else if (choice === 'Finish building team'){}
        
        });

}


start();



