const images = [
  "/images/dice1.png",
  "/images/dice2.png",
  "/images/dice3.png",
  "/images/dice4.png",
  "/images/dice5.png",
  "/images/dice6.png",
];

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

const getRandomDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const randomImages = (dice) => {
  let dicesChild = allDices.children;
  for (let i = 0; i < dicesChild.length; i++) {
    dicesChild[i].src = images[dice[i] - 1];
  }
};
let dice = [];
const countDice = () => {
  dice = [];
  for (let i = 0; i < 5; i++) {
    let tempRandomDice = getRandomDice();
    dice.push(tempRandomDice);
  }

  console.log(dice);
  return dice;
};
let punt;

const countSingleScore = (points, el) => {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    if (dice[i] === points) {
      score++;
    }
  }
  punt = parseInt(score * points);

  el.innerHTML = punt;
};
const scoreOne = document.querySelector(".card-2");
const scoreTwo = document.querySelector(".card-4");
const scoreThird = document.querySelector(".card-6");
const scoreFour = document.querySelector(".card-8");
const scoreFives = document.querySelector(".card-10");
const scoreSixes = document.querySelector(".card-12");

scoreOne.addEventListener("click", countSingleScore.bind(null, 1, scoreOne));
scoreTwo.addEventListener("click", countSingleScore.bind(null, 2, scoreTwo));
scoreThird.addEventListener(
  "click",
  countSingleScore.bind(null, 3, scoreThird)
);
scoreFour.addEventListener("click", countSingleScore.bind(null, 4, scoreFour));
scoreFives.addEventListener(
  "click",
  countSingleScore.bind(null, 5, scoreFives)
);
scoreSixes.addEventListener(
  "click",
  countSingleScore.bind(null, 6, scoreSixes)
);

rollDice.addEventListener("click", () => {
  toggleButton();
  getRandomDice();
  let tempNu = countDice();
  randomImages(tempNu);
});
