export function startQuiz(subject, selectScreen, quizScreen, quizTitle) {

const imgSubject = document.querySelector(".subject-img-container img");
 const textSubject = document.querySelector(".subject-text"); 
 const theme = document.querySelector(".theme");

 // Прячем экран выбора передмета, добавляем экран викторины

  selectScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizTitle.classList.remove("hidden");
  theme.classList.add("space-between");

// Изменение заголовка предмета викторины 
 
  if (subject==="HTML"){
    imgSubject.src = "/assets/images/icon-html.svg";
    imgSubject.alt = "HTML";
    textSubject.textContent = "HTML";
  }
    if (subject==="CSS"){
    imgSubject.src = "/assets/images/icon-css.svg";
    imgSubject.alt = "CSS";
    textSubject.textContent = "CSS";
  }
      if (subject==="JavaScript"){
    imgSubject.src = "/assets/images/icon-js.svg";
    imgSubject.alt = "JavaScript";
    textSubject.textContent = "JavaScript";
  }
       if (subject==="Accessibility"){
    imgSubject.src = "/assets/images/icon-accessibility.svg";
    imgSubject.alt = "Accessibility";
    textSubject.textContent = "Accessibility";
  }

  };
