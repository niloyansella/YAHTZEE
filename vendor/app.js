const rollDice = document.getElementById("roll-dice");
const firstDice = document.querySelector(".dice1");
const secondDice = document.querySelector(".dice2");
const thirdDice = document.querySelector(".dice3");
const fourthDice = document.querySelector(".dice4");
const fifthDice = document.querySelector(".dice5");

const toggleButton = () => {
  firstDice.classList.toggle("rollDice");
  secondDice.classList.toggle("rollDice");
  thirdDice.classList.toggle("rollDice");
  fourthDice.classList.toggle("rollDice");
  fifthDice.classList.toggle("rollDice");
};

rollDice.addEventListener("click", () => {
  toggleButton();
  getRandomDice();
});

const getRandomDice = () => {
  const randomvalue = Math.random();
  if (randomvalue < 0.2) {
    return firstDice;
  } else if (randomvalue < 0.4) {
    console.log(secondDice);
  } else if (randomvalue < 0.6) {
    console.log(thirdDice);
  } else if (randomvalue < 0.8) {
    console.log(fourthDice);
  } else if (randomvalue < 1) {
    console.log(fifthDice);
  }
};
