// Load previous score from localStorage or initialize a new one
let score = JSON.parse(localStorage.getItem("score")) || {
  player1: 0,
  player2: 0,
  draw: 0
};

function rollDice() {
  const randomSource1 = Math.floor(Math.random() * 6) + 1;
  const randomSource2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", `images/dice${randomSource1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomSource2}.png`);

  const resultText = document.querySelector("h2");
  if (randomSource1 > randomSource2) {
    resultText.innerText = "🎉 Player 1 Wins!";
    score.player1++;
  } else if (randomSource2 > randomSource1) {
    resultText.innerText = "🎉 Player 2 Wins!";
    score.player2++;
  } else {
    resultText.innerText = "🤝 It's a Draw!";
    score.draw++;
  }

  // Save updated score to localStorage
  localStorage.setItem("score", JSON.stringify(score));

  // Update score display
  updateScoreDisplay();
}

// Function to update the score display
function updateScoreDisplay() {
  document.getElementById("player1-score").innerText = `Player 1 Wins: ${score.player1}`;
  document.getElementById("player2-score").innerText = `Player 2 Wins: ${score.player2}`;
  document.getElementById("draw").innerText = `Draws: ${score.draw}`;
}

function resetScore() {
  score = { player1: 0, player2: 0, draw: 0 }; 
  localStorage.setItem("score", JSON.stringify(score)); // Reset localStorage
  updateScoreDisplay();
  document.querySelector("h2").innerText = "Who Won?";
}

// Event listener for the reset button
document.getElementById("reset").addEventListener("click", resetScore);

// Load and display previous scores on page load
updateScoreDisplay();

// Roll the dice when the page loads
rollDice();
