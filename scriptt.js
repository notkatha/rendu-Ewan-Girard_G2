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

