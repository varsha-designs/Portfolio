
window.addEventListener("load", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    let width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
});
