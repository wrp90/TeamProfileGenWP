
const topHtml = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 class="ms-auto me-auto p-4">My Team</h1>
        </nav>
        <div class="container">
            <div class="row row-cols-auto"> `

const bottomHtml = `
            </div>   
        </div>
    </body>
</html>`;

function generateHtml(empArray) {
    // for each employee
    let html = topHtml;
    for (let employee = 0; employee < empArray.length; employee++) {
        if (empArray[employee].getRole() === 'Intern') {
            // -- if emp is intern
            // -- -- add info to intern html
            const internInfo = internCard(empArray[employee]);
            // add intern info to the html
            html = html + internInfo;
        } else if (empArray[employee].getRole() === 'Manager') {
            // -- els if manager
            // -- -- add info to manger html
            const managerInfo = managerCard(empArray[employee]);
            // add manager info to the html
            html = html + managerInfo;
        } else { // if engineer
            // -- else 
            // -- add info to eng htm
            const engineerInfo = engineerCard(empArray[employee]);
            // add engineer info to the html
            html = html + engineerInfo;
        }
    }

    
    // creat a string w/ top, custom and bottom html
    html = html + bottomHtml;
    // return a  string that looks like html
    return html;
}







function managerCard(manager) {
    const managerCard = `
    <div class="card" style="width: 18rem;">
        <h2>${manager.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${manager.ID}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office Number: ${manager.office}</p>
    </div>
    `
    return managerCard;
}

function internCard(intern) {
    const internCard = `
    <div class="card" style="width: 18rem;">
        <h2>${intern.name}</h2>
        <h4>Intern<h4>
        <p>ID: ${intern.ID}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
    `
    return internCard;
}

function engineerCard(engineer) {
    const engineerCard = `
    <div class="card" style="width: 18rem;">
        <h2>${engineer.name}</h2>
        <h4>Engineer<h4>
        <p>ID: ${engineer.ID}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github: ${engineer.git}</p>
    </div>
    `
    return engineerCard;
}





module.exports = generateHtml;








