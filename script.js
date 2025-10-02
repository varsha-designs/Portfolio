
window.addEventListener("load", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    let width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".topnav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Select all sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // ✅ If it's the skills section → trigger progress bar animation
      if (entry.target.id === "skills") {
        let progressBars = entry.target.querySelectorAll(".progress-bar");
        progressBars.forEach(bar => {
          let targetWidth = bar.getAttribute("data-width"); // e.g., 80
          bar.style.width = targetWidth + "%"; // animate width
        });
      }
    } else {
      entry.target.classList.remove("animate");

      // ✅ Reset progress bars when leaving the section
      if (entry.target.id === "skills") {
        let progressBars = entry.target.querySelectorAll(".progress-bar");
        progressBars.forEach(bar => {
          bar.style.width = "0"; // reset back to 0
        });
      }
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // stop normal form submit

  let form = e.target;
  let formData = new FormData(form);

  // Send to Formspree
  let response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("✅ Thanks! Your message has been sent.");
    form.reset(); // clear fields
  } else {
    alert("❌ Oops! Something went wrong. Please try again.");
  }
});



