const inquirer = require("inquirer");
const Employee = require('./src/Employee')

const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address",
      },
];

inquirer.prompt(questions).then((answers) => {
    let employee = new Employee(answers.first_name, answers.email)
    console.log(JSON.stringify(employee.name, null, '  '));
  });