// import { QUESTIONS } from "./questions.js";

const toggle = document.getElementById("theme-toggle");
const body = document.body;
console.log(toggle);
console.log(body);

const selectScreen = document.querySelector(".screen-select");
const quizScreen = document.querySelector(".screen-question");
const inputs = document.querySelectorAll(".select-subject-item");

// загрузка сохранённой темы
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("theme-dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("theme-dark");

  localStorage.setItem(
    "theme",
    body.classList.contains("theme-dark") ? "dark" : "light"
  );
});

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    startQuiz(input.id);
  });
});

function startQuiz(subject) {
  selectScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  // loadQuestion(subject, 0);
}
