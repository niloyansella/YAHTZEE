const images = [
  "/images/dice1.png",
  "/images/dice2.png",
  "/images/dice3.png",
  "/images/dice4.png",
  "/images/dice5.png",
  "/images/dice6.png",
];
let lastWorp = [];
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
  return Math.floor(Math.random() * 6) + 1;
};
const randomImages = (dice) => {
  let dicesChild = allDices.children;
  for (let i = 0; i < dice.length; i++) {
    dicesChild[i].src = images[dice[i] - 1];
  }
};

const countDice = () => {
  let dice = [];

  for (let i = 0; i < 5; i++) {
    let tempRandomDice = getRandomDice();
    dice.push(tempRandomDice);
  }
  const filterResult = dice.filter(checkScore);

  function checkScore(dice) {
    let diceTotal = [];
    if (dice === 1) {
      diceTotal.push(1);
      console.log(diceTotal);
    }
    if (dice === 2) {
      diceTotal.push(2);
    }
    if (dice === 3) {
      diceTotal.push(3);
    }
    if (dice === 4) {
      diceTotal.push(4);
    }
    if (dice === 5) {
      diceTotal.push(5);
    }
    if (dice === 6) {
      diceTotal.push(6);
    }
  }

  return dice;
};

rollDice.addEventListener("click", () => {
  toggleButton();
  getRandomDice();
  lastWorp = countDice();
  randomImages(lastWorp);
  console.log(lastWorp);
});
