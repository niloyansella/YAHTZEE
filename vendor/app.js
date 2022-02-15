const rollDice = document.getElementById("roll-dice");
const firstDice = document.querySelector(".dice1");
const secondDice = document.querySelector(".dice2");
const thirdDice = document.querySelector(".dice3");
const fourthDice = document.querySelector(".dice4");
const fifthDice = document.querySelector(".dice5");
const allDices = document.querySelector(".dices");

const toggleButton = () => {
  firstDice.classList.add("rollDice");
  secondDice.classList.add("rollDice");
  thirdDice.classList.add("rollDice");
  fourthDice.classList.add("rollDice");
  fifthDice.classList.add("rollDice");
};

const toggleButton1 = () => {
  firstDice.classList.remove("rollDice");
  secondDice.classList.remove("rollDice");
  thirdDice.classList.remove("rollDice");
  fourthDice.classList.remove("rollDice");
  fifthDice.classList.remove("rollDice");
};

for (let i = 0; i < allDices.children.length; i++) {
  allDices.children[i].addEventListener("animationend", () => {
    toggleButton1();
  });
}

console.log(allDices.children.length);

const getRandomDice = () => {
  const randomvalue = Math.random();
  if (randomvalue < 0.2) {
    console.log(firstDice);
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

rollDice.addEventListener("click", () => {
  toggleButton();
  getRandomDice();
});
