// inquirer and fs variables
const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = require("./utils/generateHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const path = require("path");
const Team = [];

//  Manager Questions
const questions = [
  {
    type: "input",
    message: "Employees name?",
    name: "Employee",
  },
  {
    type: "input",
    message: "managers ID",
    name: "ID",
  },
  {
    type: "input",
    name: "Contact",
    message: "Input your email.",
  },
  {
    type: "input",
    message: "Manager Office Number",
    name: "officeNumber",
  },
];
// Manager created
inquirer.prompt(questions).then((answers) => {
  const manager = new Manager(
    answers.Employee,
    answers.ID,
    answers.Contact,
    answers.officeNumber
  );

  Team.push(manager);
  createTeam();
});

// Function for team
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which Team memeber do you want to create next?",
        name: "Position",
        choices: ["Engineer", "Intern", "Team is complete"],
      },
    ])
    // writing file and directing it to the html based on type of employee
    .then((answer) => {
      if (answer.Position === "Engineer") {
        createEngineer();
      } else if (answer.Position === "Intern") {
        createIntern();
      } else {
        fs.writeFileSync(
          path.join(__dirname, "/output", "Team.html"),
          generateHtml(Team)
        );
      }
    });
}
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Engineers name?",
        name: "Employee",
      },
      {
        type: "input",
        message: "Engineers ID",
        name: "ID",
      },
      {
        type: "input",
        name: "Contact",
        message: "Enginners your email.",
      },
      {
        type: "input",
        message: "Engineers Github",
        name: "Github",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.Employee,
        answer.ID,
        answer.Contact,
        answer.Github
      );
      Team.push(engineer);
      createTeam();
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Interns name?",
        name: "Employee",
      },
      {
        type: "input",
        message: "Interns ID",
        name: "ID",
      },
      {
        type: "input",
        name: "Contact",
        message: "Interns your email.",
      },
      {
        type: "input",
        message: "Engineers School",
        name: "School",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.Employee,
        answer.ID,
        answer.Contact,
        answer.School
      );
      Team.push(intern);
      createTeam();
    });
}
