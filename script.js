


function updateScore(team, points) {
    let scoreElement = document.getElementById(team + '-score');
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}


function resetScores(){
    let homeScore = document.getElementById("home-score").textContent=0
    let guestScore = document.getElementById("guest-score").textContent=0
}