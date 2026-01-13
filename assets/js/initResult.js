import { correctCount  } from "./quiz.js";

 export function initResult(subject, totalQuestions) {

    const selectScreen = document.querySelector(".screen-select");
    const screenResult = document.querySelector(".screen-result");
    
    const resultImg =  screenResult.querySelector(".result-subject-img");
    const resultText = screenResult.querySelector(".result-subject-text");
    const resultScore = screenResult.querySelector(".result-total-questions");
    const resultTotal = screenResult.querySelector("#result-total-questions");   
    const resultButton=document.querySelector(".result-btn");
    const barQuiz=document.querySelector(".quiz-progress__bar");
   
    resultScore.textContent = correctCount;
    resultTotal.textContent = totalQuestions;
       


  // Изменение заголовка предмета викторины перед счетчиком правильных вопросов
 
  if (subject==="HTML"){
    resultImg.src = "assets/images/icon-html.svg";
    resultImg.alt = "HTML";
    resultText.textContent = "HTML";
     }
    if (subject==="CSS"){
    resultImg.src = "assets/images/icon-css.svg";
    resultImg.alt = "CSS";
    resultText.textContent = "CSS";
  }
      if (subject==="JavaScript"){
    resultImg.src = "assets/images/icon-js.svg";
    resultImg.alt = "JavaScript";
    resultText.textContent = "JavaScript";
  }
       if (subject==="Accessibility"){
    resultImg.src = "assets/images/icon-accessibility.svg";
    resultImg.alt = "Accessibility";
    resultText.textContent = "Accessibility";
  }

resultButton.addEventListener("click", () => {

     // Прячем экран резутьтата, показываем экран выбора предмета

 screenResult.classList.add("hidden");
selectScreen.classList.remove("hidden");

  // 🔄 Сброс выбранного предмета
  const subjectInputs = document.querySelectorAll(".select-subject-item");
  subjectInputs.forEach(input => {
    input.checked = false;
  });
  barQuiz.style.width="0";
 });
}