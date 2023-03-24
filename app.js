const wrapper = document.querySelector(".wrapper");
const gender = document.querySelector(".gender");
const yesBtnG = document.querySelector("#yesg");
const noBtnG = document.querySelector("#nog");
const question = document.querySelector(".question");
const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");

const GnoAnswerMethod = () => {
  question.style.display = "block";
  gender.style.display = "none";
};

const yesAnswerMethod = () => {
  question.style.display = "none";
  confirmation.style.display = "block";
};

const noAnswerMethod = () => {
  noBtn.style.position = "absolute";

  const xposition = Math.floor(Math.random() * wrapper.clientWidth);
  const yposition = Math.floor(Math.random() * wrapper.clientHeight);

  // noBtn.style.left = `${xposition}px`;
  // noBtn.style.top = `${yposition}px`;
  noBtn.style.left = xposition >= wrapper.clientWidth / 2 ? `${xposition - noBtn.clientWidth}px` : `${xposition}px`;
  noBtn.style.top = yposition >= wrapper.clientHeight / 2 ? `${yposition - noBtn.clientHeight}px` : `${yposition}px`;
};

yesBtn.addEventListener("click", yesAnswerMethod);
noBtn.addEventListener("click", noAnswerMethod);
noBtnG.addEventListener("click", GnoAnswerMethod);
