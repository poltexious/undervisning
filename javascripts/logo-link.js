document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.querySelector(".md-header__button.md-logo");

  if (logoLink) {
    logoLink.setAttribute("href", "https://aatg.dk/studieretninger/gametech/");
    logoLink.setAttribute("target", "_blank");
    logoLink.setAttribute("rel", "noopener noreferrer");
  }
});