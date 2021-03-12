
function generateCards(data) {
    return managerCard = `
    <div class="card" style="width: 18rem;">
        <h2>${data.name}</h2>
        <h4>Manager<h4>
        <p>ID: ${data.id}</p>
        <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p>Office Number: ${data.office}</p>
    </div>
    `
}

module.exports = generateCards;








