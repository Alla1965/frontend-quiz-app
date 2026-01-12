// quiz.js
import { fillInDOM } from "./fillinDOM.js";
import { startQuiz } from "./startQuiz.js";
import { initResult } from "./initResult.js";

let allData = null;
let currentQuestionIndex = 0;
let currentSubject = null;
let totalQuestions = 0;

export let isAnswered = false;
export let correctCount = 0;

export function resetCorrectCount() {
  correctCount = 0;
}

export function incrementCorrectCount() {
  correctCount++;
}

  export const quizScreen = document.querySelector(".screen-question");
  export const screenResult = document.querySelector(".screen-result");
  export const noAnswer=document.querySelector(".no-answer");

 export function setAnswered(value) {
  isAnswered = value;
}


export function getAnswered() {
  return isAnswered;
}

function loadData() {
  return fetch("/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Oops! Something went wrong.");
      }
      return response.json();
    });
}

function updateProgressBar(bar, currentIndex, total) {
 
  const percent = ((currentIndex ) / total) * 100;
    
  bar.style.width = `${percent}%`;

}


export function initQuiz() {
  const selectScreen = document.querySelector(".screen-select");
  const inputs = document.querySelectorAll(".select-subject-item");
  const quizTitle = document.querySelector(".subject");
  const nextButton=document.querySelector(".submit-btn");
  const barQuiz=document.querySelector(".quiz-progress__bar");
     

loadData()
    .then((data) => {
      allData = data;



// 🔹 выбор предмета
      inputs.forEach((input) => {
        input.addEventListener("change", () => {
           resetCorrectCount(); // 🔄 сброс перед началом
          setAnswered(false);
          noAnswer.classList.remove("is-visible");

          currentSubject = input.id;
          currentQuestionIndex = 0;

          startQuiz(input.id, selectScreen, quizScreen, quizTitle);

          const subjectQuiz = allData.quizzes.find(
            (quiz) => quiz.title === currentSubject
          );

          if (!subjectQuiz) {
            console.error("Quiz not found:", currentSubject);
            return;
          }

          totalQuestions = subjectQuiz.questions.length;

                   fillInDOM(subjectQuiz, currentSubject,currentQuestionIndex);
        });
      });
 

   // 🔹 кнопка Next
         nextButton.addEventListener("click", () => {
           if (!getAnswered()) {
             noAnswer.classList.add("is-visible");
             return;
           }
   
           const subjectQuiz = allData.quizzes.find(
             (quiz) => quiz.title === currentSubject
           );
   
           setAnswered(false);
           noAnswer.classList.remove("is-visible");
           currentQuestionIndex++;

             // 🔹 Проверка: конец квиза
  if (currentQuestionIndex >= totalQuestions) {
    // Скрываем экран вопросов
    quizScreen.classList.add("hidden");
    // Показываем экран результатов
    screenResult.classList.remove("hidden");

    // Вызываем initResult ПОСЛЕ того, как пользователь ответил на все вопросы
    
    initResult(currentSubject, totalQuestions);

    return; // дальше не продолжаем
  }

          updateProgressBar(barQuiz, currentQuestionIndex, totalQuestions);
           fillInDOM(subjectQuiz, currentSubject, currentQuestionIndex);
         });
       })
       .catch(console.error);
   }
  

   

 
