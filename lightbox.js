document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuPopup = document.querySelector(".menu-popup");

  menuIcon.addEventListener("click", function () {
    menuPopup.style.display =
      menuPopup.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!menuIcon.contains(event.target) && !menuPopup.contains(event.target)) {
      menuPopup.style.display = "none";
    }
  });
});

const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});
