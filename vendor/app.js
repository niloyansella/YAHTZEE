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

const countDice = () => {
  let dice = [];
  for (let i = 0; i < 5; i++) {
    let tempRandomDice = getRandomDice();
    dice.push(tempRandomDice);
  }
  return dice;
};

const countScore = () => {
  let combi = [];
};

const randomImages = (dice) => {
  let dicesChild = allDices.children;
  for (let i = 0; i < dice.length; i++) {
    dicesChild[i].src = images[dice[i] - 1];
  }
};

rollDice.addEventListener("click", () => {
  toggleButton();
  getRandomDice();
  lastWorp = countDice();
  randomImages(lastWorp);
  console.log(lastWorp);
});
