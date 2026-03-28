let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const compchoice = Math.floor(Math.random() * 3);
  return options[compchoice];
};
const showWiner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    msg.innerText = `You win. Your ${userchoice} beats ${compchoice}. `;
    userScore++;
    userScoreBoard.innerHTML = userScore;
  } else {
    msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
    compScore++;
    compScoreBoard.innerHTML = compScore;
  }
};
const gameDraw = () => {
  console.log("Game was draw");
  msg.innerText = "Game Was Draw";
};
const playGame = (userchoice) => {
  console.log(`user choice is ${userchoice}`);
  const compchoice = gencompchoice();
  console.log(`computer choice is ${compchoice}`);
  if (userchoice === compchoice) {
    gameDraw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "scissors" ? true : false;
    } else if (userchoice === "paper") {
      userwin = compchoice === "rock" ? true : false;
    } else {
      userwin = compchoice === "paper" ? true : false;
    }
    showWiner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    // console.log(`choice was clicked ${userchoice}`);
    playGame(userchoice);
  });
});
