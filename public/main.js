let score = 0;
const oneToHome = () => {
  score += 1;
  let message = `${score}`;
  const teamHomeScore = document.querySelector(".hometeamscore");
  teamHomeScore.textContent = message;
};
const oneToAway = () => {
  score += 1;
  let message = `${score}`;
  const teamAwayScore = document.querySelector(".awayteamscore");
  teamAwayScore.textContent = message;
};
const oneFromHome = () => {
  score -= 1;
  let message = `${score}`;
  const teamHomeScore = document.querySelector(".hometeamscore");
  teamHomeScore.textContent = message;
};
const oneFromAway = () => {
  score -= 1;
  let message = `${score}`;
  const teamAwayScore = document.querySelector(".awayteamscore");
  teamAwayScore.textContent = message;
};
// let newName = document.getElementById('#home').value;
const homeNameChange = () => {
  console.log("new home name");
  let updateHomeTeam = document.querySelector("#home");
  let homeTeamName = document.querySelector(".hometeamname");
  let message = `${updateHomeTeam.value}`;
  homeTeamName.textContent = message;
  // let message = `userInput`;
  // const userInput = document.getElementById('#home').value;
  // userInput.textContent = message;


//   document.getElementsByClassName(".hometeamname").innerHTML = newName;
};
const awayNameChange = () => {
  console.log("new away name");
  let updateAwayTeam = document.querySelector("#away");
  let awayTeamName = document.querySelector(".awayteamname");
  let message = `${updateAwayTeam.value}`;
  awayTeamName.textContent = message;

};
const main = () => {
  const addHomeOne = document.querySelector('.addhome');
  addHomeOne.addEventListener("click", oneToHome);
  const addAwayOne = document.querySelector('.addaway');
  addAwayOne.addEventListener("click", oneToAway);
  const subHomeOne = document.querySelector('.subhome');
  subHomeOne.addEventListener("click", oneFromHome);
  const SubAwayOne = document.querySelector('.subaway');
  SubAwayOne.addEventListener("click", oneFromAway);

  const newHomeName = document.querySelector('.namehome');
  newHomeName.addEventListener("click", homeNameChange);

  const newAwayName = document.querySelector('.nameaway');
  newAwayName.addEventListener("click", awayNameChange);

};

document.addEventListener('DOMContentLoaded', main);
