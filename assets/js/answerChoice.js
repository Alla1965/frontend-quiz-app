import { correctCount, incrementCorrectCount, getAnswered, isAnswered, setAnswered } from "./quiz.js";
import { noAnswer } from "./quiz.js";

export function answerChoice(
    questionIndex,
    questionText,
    options,
    correctAnswer){

  const currentQuestionEl = document.getElementById('current-question');
  const questionContent  = document.querySelector(".question-content");
  const answerItems = document.querySelectorAll('.answer-item');
  const inputs = document.querySelectorAll('.select-answer-item');

  // 1️⃣ Сброс состояния
  setAnswered(false);


  inputs.forEach(input => {
    input.checked = false;
    input.disabled = false;
  });
  answerItems.forEach(item => {
    const icon = item.querySelector(".answer-icon");
      item.classList.remove("correct", "wrong");
  });

  // 2️⃣ Заполнение вопроса
  currentQuestionEl.textContent = questionIndex;
  questionContent.textContent = questionText;

  answerItems.forEach((item, i) => {
    const textEl = item.querySelector(".answer-content");
       
    textEl.textContent = options[i];
  });

  // 3️⃣ навешиваем обработчик на каждый вариант ответа (показывает ✔️ или ❌)
  //  change срабатывает, когда пользователь выбирает вариант

  inputs.forEach(input => {
    input.onchange = () => {

      setAnswered(true);//Фиксация факта ответа

      noAnswer.classList.remove("is-visible"); 
      
      
    

      // блокируем всё ✔ После выбора:все варианты становятся некликабельными, 
      //нельзя изменить ответ
      inputs.forEach(i => (i.disabled = true));

      const item = input.closest(".answer-item");//Поиск выбранного варианта

      const text = item
        .querySelector(".answer-content")
        .textContent
        .trim(); //Получает текст выбранного ответа

      const icon = item.querySelector(".answer-icon");//Поиск иконки

     //Проверка правильности ответа
      if (text === correctAnswer) {
        incrementCorrectCount(); // 🔥 +1 правильный ответ
        icon.src = "assets/images/icon-correct.svg";
        icon.alt = "Правильный ответ";
        item.classList.add("correct");
      } else {
        icon.src = "assets/images/icon-error.svg";
        icon.alt = "Неправильный ответ";
        item.classList.add("wrong");
      }

      icon.style.display = "block";
    };
  });

}