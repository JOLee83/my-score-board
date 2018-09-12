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
// const homeChangeName = () => {
//   var userInput = document.getElementById('#home').value;
//   var newName = userInput;
//   document.getElementsByClassName(".hometeamname").innerHTML = newName;
// };


const main = () => {
  const addHomeOne = document.querySelector('.addhome');
  addHomeOne.addEventListener("click", oneToHome);
  const addAwayOne = document.querySelector('.addaway');
  addAwayOne.addEventListener("click", oneToAway);
  const subHomeOne = document.querySelector('.subhome');
  subHomeOne.addEventListener("click", oneFromHome);
  const SubAwayOne = document.querySelector('.subaway');
  SubAwayOne.addEventListener("click", oneFromAway);

  // const newHomeName = document.getElementsByClassName('.namehome');
  // newHomeName.addEventListener("click", homeNameChange);

};

document.addEventListener('DOMContentLoaded', main);
