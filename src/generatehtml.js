
function generateCards(response) {
    return managerCard = `
    <div class="card" style="width: 18rem;">
        <h2>${response.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${response.id}</p>
        <p>Email: <a href="mailto:${response.email}">${response.email}</a></p>
        <p>Office Number: ${response.office}</p>
    </div>
    `
}

// function generateHeadHtml(response) {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//         <title>Team Profile</title>
//     </head>
//     <body>
//         <header>
//         <h1 class="text-center">Team</h1>
//         </header>
//     </body>
//     </html>    
//     `
// }

module.exports = generateCards;








