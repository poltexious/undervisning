document.addEventListener("DOMContentLoaded", function () {
  const SIZES = ["small", "normal", "large"];
  const LABELS = {
    small: "Lille tekst",
    normal: "Normal tekst",
    large: "Stor tekst",
  };
  const STORAGE_KEY = "text-size";

  const header = document.querySelector(".md-header__inner");
  if (!header) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "md-header__button md-icon text-size-toggle";
  button.textContent = "A";

  const searchLabel = header.querySelector('label[for="__search"]');
  const source = header.querySelector(".md-header__source");
  if (searchLabel) {
    header.insertBefore(button, searchLabel);
  } else if (source) {
    header.insertBefore(button, source);
  } else {
    header.appendChild(button);
  }

  function applySize(size) {
    document.body.setAttribute("data-text-size", size);
    button.setAttribute("data-current-size", size);
    const title = `Tekststørrelse: ${LABELS[size]} (klik for at ændre)`;
    button.title = title;
    button.setAttribute("aria-label", title);
    localStorage.setItem(STORAGE_KEY, size);
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  applySize(SIZES.includes(stored) ? stored : "normal");

  button.addEventListener("click", function () {
    const current = document.body.getAttribute("data-text-size") || "normal";
    const next = SIZES[(SIZES.indexOf(current) + 1) % SIZES.length];
    applySize(next);
  });
});
