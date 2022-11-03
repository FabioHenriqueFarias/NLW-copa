function createGame(player1, hour, player2){
    return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira do Brasil">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
    </li>
    `
}

function createCard(date, day, games){
    return `
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="assets/logo.svg" alt="">
    </header>
    <main id="cards">
        ${createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia"))}
        ${createCard()}
    </main>
`
