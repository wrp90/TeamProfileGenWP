//Global Variables
const fs = require('fs');
const inquirer = require('inquirer');

//Class variables
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//Full team array
const teamArray = [];

//Init function with inquirer prompt to get info
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter team manager name.',
            name: 'name',
        },
        {
           type: 'input',
           message: 'Please enter team manager employee ID.', 
           name: 'ID'
        },
        {
            type: 'input',
            message: 'Please enter team manager email.',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter team manager office number.',
            name: 'office',
        },
        {
            type: 'list',
            message: 'Please select one of the following options.',
            name: 'addMember',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
        },
    //Then function manipulating the response
    ]).then(response => {
        //First option to finish building team
        if (response.addMember === 'Finish building team') {
            const addManager = new Manager (response.name, response.ID, response.email, response.office);
            teamArray.push(addManager);
            console.log(teamArray)
        } else if (response.addMember === 'Add an Engineer') {
            inquirer.prompt([
                {
                   type: 'input',
                   message: 'Please enter Engineer name.',
                   name: 'name', 
                },
                {
                    type: 'input',
                    message: 'Please enter Engineer ID.',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'Please enter Engineer email',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Please enter Engineer GitHub username.',
                    name: 'git',
                },
            ]).then(response => {
                const addEngineer = new Engineer (response.name, response.ID, response.email, response.git);
                teamArray.push(addEngineer);
                // additionalEngineer();
            })
        //Add Intern prompt
        } else if (response.addMember === 'Add an Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter Intern name.',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern ID.',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern email.',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern School.',
                    name: 'school',
                },
            ]).then(response => {
                const addIntern = new Intern(response.name, response.ID, response.email, response.school);
                teamArray.push(addIntern);
                // additionalIntern();
            })
        }
    })
}

// function additionalEngineer() {
//     inquirer.prompt([
//         {
//             type: 'confirm',
//             message: 'Would you like to add another team member of the same position?',
//             name: 'additionalMember',
//         }        
//     ]).then(response => {
//         if (response.additionalMember === true) {
//             inquirer.prompt([
//                 {
//                    type: 'input',
//                    message: 'Please enter Engineer name.',
//                    name: 'name', 
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Engineer ID.',
//                     name: 'ID',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Engineer email',
//                     name: 'email'
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Engineer GitHub username.',
//                     name: 'git',
//                 },
//             ]).then(response => {
//                 const addEngineer = new Engineer (response.name, response.ID, response.email, response.git);
//                 teamArray.push(addEngineer);
//                 additionalMem();
//             })
//         } else {
//             const addEngineer = new Engineer (response.name, response.ID, response.email, response.git);
//             teamArray.push(addEngineer);
//         }
//     })
// }

// function additionalIntern() {
//     inquirer.prompt([
//         {
//             type: 'confirm',
//             message: 'Would you like to add another team member of the same position?',
//             name: 'additionalMember',
//         }        
//     ]).then(response => {
//         if (response.additionalMember === true) {
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     message: 'Please enter Intern name.',
//                     name: 'name',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Intern ID.',
//                     name: 'ID',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Intern email.',
//                     name: 'email',
//                 },
//                 {
//                     type: 'input',
//                     message: 'Please enter Intern School.',
//                     name: 'school',
//                 },
//             ]).then(response => {
//                 const addIntern = new Intern(response.name, response.ID, response.email, response.school);
//                 teamArray.push(addIntern);
//             })
//         } else (response.additionalMember === false) {
//             const addIntern = new Intern(response.name, response.ID, response.email, response.school);
//             teamArray.push(addIntern);
//         }
//     })
// }


init();

