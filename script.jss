<<<<<<< HEAD
// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Auto-scroll to sections
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Load projects from JSON (optional future extension)
  // fetch("./data/projects.json")
  //   .then(res => res.json())
  //   .then(data => console.log("Loaded Projects:", data));
});
=======
// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Auto-scroll to sections
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Load projects from JSON (optional future extension)
  // fetch("./data/projects.json")
  //   .then(res => res.json())
  //   .then(data => console.log("Loaded Projects:", data));
});
>>>>>>> 36f2bbc9e4bc79b214d46178e47db780ee0097eb
