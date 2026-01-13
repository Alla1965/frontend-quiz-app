import { initTheme } from "./theme.js";
import { initQuiz } from "./quiz.js";

const toggle = document.getElementById("theme-toggle");


// инициализация темы
initTheme(toggle);

// инициализация квиза
initQuiz();

