//Global Variables
const fs = require('fs');
const inquirer = require('inquirer');
const teamArray = [];
console.log(teamArray)

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
            message: 'Please enter team manager email adress.',
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
        console.log(response)
        //First option to finish building team
        if (response.addMember === 'Finish building team') {
            // const addManager = new Manager (response.manName, response.manID, response. manEmail, response.manOfficeNum);
            // teamArray.push(addManager);
        } else if (response.addMember === 'Add an Engineer') {
            inquirer.prompt([
                {
                   type: 'input',
                   message: 'Please enter Engeneer name.',
                   name: 'name', 
                },
                {
                    type: 'input',
                    message: 'Please enter Engeneer ID.',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'Please enter Engeneer GitHub username.',
                    name: 'Git',
                },
            ])
        //Add Intern prompt
        } else if (response.addMember === 'Add an Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter Intern name.',
                    name: 'Name',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern ID.',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'Please enter intern email.',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern School.',
                    name: 'school',
                },
            ])
        }
    })
}

function additionalMem() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member of the same position?',
            name: 'additionalMember',
        }        
    ]).then(response => {
        if (response === true) {

        }
    })
}
init();

