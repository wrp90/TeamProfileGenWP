
const htmlTemp = 
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
            <div class="row row-cols-auto">     
        </div>
    </body>
</html>`;






function managerCard(response) {
    console.log('Team Array generatehtml:', response)
    const htmlArray = [];
    for (let i=0; i < response.length; i++) {
        const managerCard = `
        <div class="card" style="width: 18rem;">
            <h2>${response[i].name}</h2>
            <h4>Employee<h4>
            <p>ID: ${response[i].ID}</p>
            <p>Email: <a href="mailto:${response[i].email}">${response[i].email}</a></p>
            <p>Office Number/Github/School: ${response[i].office}</p>
        </div>
        `
        htmlArray.push(managerCard);
    }
    return htmlArray;
}





module.exports = managerCard;








