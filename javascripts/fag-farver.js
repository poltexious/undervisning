document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;

    let fag = "";
    if (path.includes("/programmering-b/")) fag = "programmering";
    else if (path.includes("/matematik/")) fag = "matematik";
    else if (path.includes("/fysik/")) fag = "fysik";

    if (fag) {
        document.body.setAttribute("data-fag", fag);
    }
});