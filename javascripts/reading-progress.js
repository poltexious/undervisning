document.addEventListener("DOMContentLoaded", function () {
  const track = document.createElement("div");
  track.id = "reading-progress-track";

  const fill = document.createElement("div");
  fill.id = "reading-progress-fill";

  track.appendChild(fill);
  document.body.appendChild(track);

  const sidebar = document.querySelector(".md-sidebar--secondary");
  const header = document.querySelector(".md-header");
  const footer = document.querySelector(".md-footer");

  function positionTrack() {
    if (!sidebar) {
      track.style.display = "none";
      return;
    }
    const rect = sidebar.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      // Sidebaren er skjult (smal skærm / ingen indholdsfortegnelse på siden)
      track.style.display = "none";
      return;
    }
    track.style.display = "block";
    track.style.left = Math.round(rect.left) + "px";
  }

  // Begræns bjælken til det hvide indholdsområde: fra bunden af headeren
  // (banneret øverst) til toppen af footeren (den sorte bund), i stedet for
  // at dække hele vinduets højde.
  function updateBounds() {
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const footerTop = footer ? footer.getBoundingClientRect().top : window.innerHeight;

    const top = Math.max(0, headerBottom);
    const bottom = Math.min(window.innerHeight, footerTop);
    const height = Math.max(0, bottom - top);

    track.style.top = top + "px";
    track.style.height = height + "px";
  }

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.height = Math.min(100, Math.max(0, progress)) + "%";
  }

  function update() {
    positionTrack();
    updateBounds();
    updateProgress();
  }

  update();

  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
});
