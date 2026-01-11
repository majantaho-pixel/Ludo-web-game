
let diceResult = document.getElementById("diceResult");
let token = document.getElementById("red");

let position = 0;

// Simple straight path (start learning)
let path = [
  {x: 30, y: 300},
  {x: 80, y: 300},
  {x: 130, y: 300},
  {x: 180, y: 300},
  {x: 230, y: 300},
  {x: 280, y: 300}
];

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceResult.innerText = "Dice: " + dice;

  position += dice;
  if (position >= path.length) position = path.length - 1;

  token.style.left = path[position].x + "px";
  token.style.top  = path[position].y + "px";
}
