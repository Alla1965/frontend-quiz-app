import { answerChoice } from "./answerChoice.js";
import { quizScreen, screenResult } from "./quiz.js";
// import { getAnswered, setAnswered } from "./quiz.js";

export function fillInDOM(subjectQuiz, currentSubject, currentQuestionIndex) {



//переход к экрану результата, когда закончились вопросы
  const question = subjectQuiz.questions[currentQuestionIndex];

        if (!question) {
             
       quizScreen.classList.add("hidden");
       screenResult.classList.remove("hidden");
    return;
  }

// 🔄 СБРОС СОСТОЯНИЯ ОТВЕТОВ

  const inputs = document.querySelectorAll('.select-answer-item');//инпуты ответов
  const icons = document.querySelectorAll('.answer-icon');//иконки состояния ответов (правильно или ошибка)

  inputs.forEach(input => {
    input.disabled = false;// активация инпутов ответов, они становятся активными 
    input.checked = false;// удаление отметки, что элемента выбран  
  });

//удаление иконки состояния ответов

  icons.forEach(icon => {
    icon.style.display = 'none';
  });

  answerChoice( 
    currentQuestionIndex + 1, 
    question.question,
    question.options,
    question.answer);
  };
  
   

