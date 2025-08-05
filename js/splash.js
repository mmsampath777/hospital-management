window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-content");
  const footer = document.getElementById("footer");

  setTimeout(() => {
    splash.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";
    main.classList.add("fadein");
    footer.classList.add("fadein");
  }, 2500);
});
