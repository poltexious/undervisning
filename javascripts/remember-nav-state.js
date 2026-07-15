(function () {
  const STORAGE_KEY = "nav-sections-open";
  const OPEN_CLASS = "js-nav-force-open";
  const CLOSED_CLASS = "js-nav-force-closed";
  const NO_TRANSITION_CLASS = "js-nav-no-transition";

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // localStorage utilgængelig — springes bare over
    }
  }

  // Styling sker via egne CSS-klasser (extra.css) med !important, i stedet
  // for kun at sætte checkboksens .checked. Materials eget bundle.js
  // nulstiller nemlig .checked internt efter sideindlæsning (bekræftet ved
  // fejlsøgning) — men det kan ikke overtrumfe vores !important-klasser,
  // så det visuelle resultat forbliver korrekt uanset hvad der sker med
  // selve checkboksen bagefter.
  function setOpen(li, isOpen, suppressTransition) {
    if (suppressTransition) {
      li.classList.add(NO_TRANSITION_CLASS);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          li.classList.remove(NO_TRANSITION_CLASS);
        });
      });
    }
    li.classList.toggle(OPEN_CLASS, isOpen);
    li.classList.toggle(CLOSED_CLASS, !isOpen);
  }

  const state = loadState();
  const toggles = document.querySelectorAll('input.md-nav__toggle[id^="__nav_"]');

  toggles.forEach(function (toggle) {
    const li = toggle.closest(".md-nav__item--nested");
    if (!li) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(state, toggle.id)) {
      const shouldBeOpen = state[toggle.id];
      toggle.checked = shouldBeOpen;
      setOpen(li, shouldBeOpen, true);
    }

    toggle.addEventListener("change", function () {
      setOpen(li, toggle.checked, false);
      const current = loadState();
      current[toggle.id] = toggle.checked;
      saveState(current);
    });
  });
})();
