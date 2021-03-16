//Global Variables
const fs = require('fs');
const inquirer = require('inquirer');

//Class variables
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generatehtml.js');

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
            message: 'Would you like to add another team member?.',
            name: 'addMember',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
        },
    //Then function manipulating the response
    ]).then(response => {
        const addManager = new Manager (response.name, response.ID, response.email, response.office);
        teamArray.push(addManager);
        addTeamMember(response.addMember);
    })
}

function addTeamMember(addMember) {
        // if they addMember was engineer
        if (addMember === 'Add an Engineer') {
            // -- prompt eng questions and if they want to add another employee
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
                {
                    type: 'list',
                    message: 'Would you like to add another team member?.',
                    name: 'addMember',
                    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
                },
            ]).then(response => {
                // -- -- create the eng
                const addEngineer = new Engineer(response.name, response.ID, response.email, response.git);
                // -- -- add the eng to the teamarray
                teamArray.push(addEngineer);
                // -- -- call addTeamMebmer again
                addTeamMember(response.addMember);
            })
            // else if they wanted to add intern
        } else if (addMember === 'Add an Intern') {
            // --  prompt intern questions and if they want to add another employee
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
                {
                    type: 'list',
                    message: 'Would you like to add another team member?.',
                    name: 'addMember',
                    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
                },
            ]).then(response => {
                // -- -- create the intern
                const addIntern = new Intern(response.name, response.ID, response.email, response.school);
                // -- -- add the int to the teamarray
                teamArray.push(addIntern);
                // -- -- call addTeamMebmer again
                addTeamMember(response.addMember);
            })
        } else {
            var htmlString = generateHtml(teamArray);
            fs.writeFile('./dist/index.html', htmlString, (err) => {
                err ? console.error(err) : console.log('Page Generated!')
            })
            console.log('Team Array Index.js: ', teamArray)
        }
        // else 
        // -- you have an array
        // -- write a string that looks like hmtl statrter coder
        // -- for each item in that array write a string that looks like html
        // -- use fs to turn that string into an html file
}



init();

