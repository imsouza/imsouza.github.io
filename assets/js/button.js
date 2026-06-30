document.addEventListener("touchstart", function(){}, true);

const backToTopButton = document.getElementById("button");

window.addEventListener("scroll", function () {
  if (!backToTopButton) return;

  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}, { passive: true });

if (backToTopButton) {
  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
