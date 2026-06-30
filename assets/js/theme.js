(function () {
  function getTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      return;
    }
    updateButtons(theme);
  }

  function updateButtons(theme) {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("title", isDark ? "Modo claro" : "Modo noturno");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateButtons(getTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        setTheme(getTheme() === "dark" ? "light" : "dark");
      });
    });
  });
})();
