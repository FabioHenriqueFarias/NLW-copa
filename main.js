function createGame(player1, hour, player2){
    return `
    <li>
        <img src="assets/Bandeiras/icon=${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="assets/Bandeiras/icon=${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.5;
function createCard(date, day, games){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>`
}

document.querySelector("#cards").innerHTML = 
        createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia")) +
        createCard("28/11", "segunda", createGame("switzerland", "16:00", "cameroon") + createGame("portugal", "16:00", "uruguay"));

let body = document.querySelector("body");
let drawColor = (Math.random() * (3 - 1) + 1).toFixed(0);
let bodyClass;
if (drawColor == 1){
    bodyClass = "yellow";
}
if (drawColor == 2){
    bodyClass = "blue";
}
if(drawColor == 3){
    bodyClass = "green";
}
body.setAttribute("class", `${bodyClass || "yellow"}`)

