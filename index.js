const fs = require('fs');

const inquirer = require('inquirer');

function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter team manager name.',
            name: 'manName',
        },
        {
           type: 'input',
           message: 'Please enter team manager employee ID.', 
           name: 'manID'
        },
        {
            type: 'input',
            message: 'Please enter team manager email adress.',
            name: 'manEmail',
        },
        {
            type: 'input',
            message: 'Please enter team manager office number.',
            name: 'manOfficeNum',
        },
        {
            type: 'list',
            message: 'Please select one of the following options.',
            name: 'addMember',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
        },
    ]).then(response => {
        console.log(response)
        if (response.addMember === 'Finish building team') {
            console.log('team finished');
        } else if (response.addMember === 'Add an Engineer') {
            inquirer.prompt([
                {
                   type: 'input',
                   message: 'Please enter Engeneer name.',
                   name: 'engName', 
                },
                {
                    type: 'input',
                    message: 'Please enter Engeneer ID.',
                    name: 'engID',
                },
                {
                    type: 'input',
                    message: 'Please enter Engeneer GitHub username.',
                    name: 'engGit',
                },
            ])
        } else if (response.addMember === 'Add an Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter Intern name.',
                    name: 'internName',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern ID.',
                    name: 'internID',
                },
                {
                    type: 'input',
                    message: 'Please enter intern email.',
                    name: 'internEmail',
                },
                {
                    type: 'input',
                    message: 'Please enter Intern School.',
                    name: 'internSchool',
                },
            ])
        }
    })
}

init();

