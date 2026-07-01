function toggleMenu() {
  var menuToggle = document.querySelector(".mobile-menu-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (!menuToggle || !menu) return;

  var isOpen = menuToggle.classList.toggle('active');
  menu.classList.toggle("is-open");
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
  var menuToggle = document.querySelector(".mobile-menu-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (!menuToggle || !menu) return;

  menuToggle.classList.remove('active');
  menu.classList.remove("is-open");
  menuToggle.setAttribute('aria-expanded', 'false');
}

(function() {
  var menuToggle = document.querySelector(".mobile-menu-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (!menuToggle || !menu) return;

  menuToggle.addEventListener('click', toggleMenu);

  document.addEventListener('click', function(event) {
    if (!menu.classList.contains('is-open')) return;
    if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  var links = menu.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeMenu);
  }
})();
