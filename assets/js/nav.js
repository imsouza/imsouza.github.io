$(document).ready(function () {
  $(".mobile-menu-toggle").click(function () {
    $(".mobile-menu").slideToggle(); // Toggle the mobile menu
  });
});

function toggleMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  menuToggle.classList.toggle('active');
}
