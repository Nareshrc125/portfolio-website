// Add a toggle to switch themes
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
