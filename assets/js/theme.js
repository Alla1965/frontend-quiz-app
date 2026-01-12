// theme.js

export function initTheme(toggleElement) {
  const body = document.body;

  // загрузка сохранённой темы
  const savedTheme = localStorage.getItem("theme");
   
  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
    toggleElement.checked = true;
  }

  toggleElement.addEventListener("change", () => {
    body.classList.toggle("theme-dark");

    localStorage.setItem(
      "theme",
      body.classList.contains("theme-dark") ? "dark" : "light"
    );
  });
}
