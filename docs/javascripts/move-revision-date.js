document.addEventListener("DOMContentLoaded", function () {
  const sourceFile = document.querySelector(".md-content .md-source-file");
  const heading = document.querySelector(".md-content__inner.md-typeset h1");

  if (sourceFile && heading) {
    heading.insertAdjacentElement("afterend", sourceFile);
  }
});
