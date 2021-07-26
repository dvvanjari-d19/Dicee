// Roll dice for player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let player1Dice = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", "images/" + player1Dice);


// Roll dice for player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let player2Dice = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", "images/" + player2Dice);


// Determine the Winner
let winner = '';
let finalHeading = '';

if (randomNumber1 > randomNumber2) {
  winner = "Player 1";
} else if (randomNumber1 < randomNumber2) {
  winner = "Player 2";
} else {
  winner = "Draw";
}

if (winner === "Draw") {
  document.querySelector("h1").innerHTML = "It's a Draw!";
} else {
  document.querySelector("h1").innerHTML = winner + " wins!";
}
