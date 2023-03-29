import "./style.css";

// console.log(process.env.OPEN_AI_API_KEY);

const diceBtn = document.getElementById("dice");
const adviceID = document.getElementById("adviceID");
const advice = document.getElementById("advice");

const getQuote = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip;
};

diceBtn.addEventListener("click", async () => {
  const slip = await getQuote();
  adviceID.textContent = slip.id;
  advice.textContent = slip.advice;
});
