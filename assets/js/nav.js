function toggleMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!menuToggle || !menu) return;

  menuToggle.classList.toggle('active');
  menu.classList.toggle("is-open");
}
