const projectBtn = document.querySelector(".projects");
const projectsSection = document.querySelector(".projects_section");

projectBtn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ 
    behavior: "smooth",
    block: "start"});
});

gsap.from("header h1", {
  width: 0,
  duration: 8,
});
