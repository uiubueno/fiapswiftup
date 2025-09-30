const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    themeToggle.checked = true;
  } else {
    themeToggle.checked = false;
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("change", () => {
  const newTheme = themeToggle.checked ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

document.querySelectorAll(".mission-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`Você abriu a missão: ${item.textContent.trim()}`);
  });
});
