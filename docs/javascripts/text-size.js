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

  const group = document.createElement("div");
  group.className = "text-size-group";

  const buttons = {};

  SIZES.forEach(function (size) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "md-header__button md-icon text-size-toggle";
    button.dataset.size = size;
    button.textContent = "A";
    button.title = LABELS[size];
    button.setAttribute("aria-label", LABELS[size]);
    button.addEventListener("click", function () {
      applySize(size);
    });
    group.appendChild(button);
    buttons[size] = button;
  });

  const searchLabel = header.querySelector('label[for="__search"]');
  const source = header.querySelector(".md-header__source");
  if (searchLabel) {
    header.insertBefore(group, searchLabel);
  } else if (source) {
    header.insertBefore(group, source);
  } else {
    header.appendChild(group);
  }

  function applySize(size) {
    document.body.setAttribute("data-text-size", size);
    SIZES.forEach(function (s) {
      buttons[s].classList.toggle("is-active", s === size);
    });
    localStorage.setItem(STORAGE_KEY, size);
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  applySize(SIZES.includes(stored) ? stored : "normal");
});
