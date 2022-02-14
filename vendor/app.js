const rollDice = document.getElementById("roll-dice");
const dices = document.querySelector(".dice1");

console.log(dices);
rollDice.addEventListener("click", () => {
  dices.classList.add("rollDice");
});

rollDice.addEventListener("animationend", () => {
  dices.classList.remove("rollDice");
});
