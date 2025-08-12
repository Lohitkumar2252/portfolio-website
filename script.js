const projectBtn = document.querySelector(".hero_right button");
const projectsSection = document.querySelector(".projects_section");

projectBtn.addEventListener("click", () => {
  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

function section1Animation() {
  gsap.from("header h1", {
  width: 0,
  duration: 8,
});
const tl = gsap.timeline();
tl.from("header nav ul", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 0.6,
});

gsap.from("header nav ul li a", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 0.6,
  stagger: 0.2,
});

tl.from(
  ".profile_card",
  {
    opacity: 0,
    duration: 1,
    x: -100,
  },
  "-=0.5"
);
const tl2 = gsap.timeline({
  delay: 1,
  scrollTrigger: {
    trigger: ".hero_right",
    scroller: "body",
    start: "top center",
    end: "bottom top",
  },
});
tl2.from(".slide", {
  opacity: 0,
  duration: 1,
  x: -100,
  stagger: 0.2,
});

tl2.from(".content p", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.2,
}, "-=0.5")

gsap.from(".skills_section p, .skills_container", {
  opacity: 0,
  duration: 1,
  y: 50,
  scrollTrigger: {
    trigger: ".skills_section",
    scroller: "body",
    start: "top 70%",
  },
})
}
function section2Animation() {
  const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects_section",
    scroller: "body",
    start: "top 65%",
    end: "top -50%",
    scrub: 1,
  },
});

tl3.from(".project1 .project_left", {
  opacity: 0,
  duration: 0.5,
  x: -100,
}, "line1")
tl3.from(".project1 .project_right", {
  opacity: 0,
  duration: 0.5,
  x: 100,
}, "line1")

tl3.from(".project2 .project_left", {
  opacity: 0,
  duration: 0.5,
  x: -100,
}, "line2")
tl3.from(".project2 .project_right", {
  opacity: 0,
  duration: 0.5,
  x: 100,
}, "line2")

tl3.from(".project3 .project_left", {
  opacity: 0,
  duration: 0.5,
  x: -100,
}, "line3")
tl3.from(".project3 .project_right", {
  opacity: 0,
  duration: 0.5,
  x: 100,
}, "line3")

tl3.from(".project4 .project_left", {
  opacity: 0,
  duration: 0.5,
  x: -100,
}, "line4")
tl3.from(".project4 .project_right", {
  opacity: 0,
  duration: 0.5,
  x: 100,
}, "line4")

gsap.from(".contact_container", {
  opacity: 0,
  duration: 0.8,
  y: 50,
  scrollTrigger: {
    trigger: ".contact_section",
    scroller: "body",
    start: "top 80%",
    end: "top 80%",
    scrub: 1,
    markers: true,
  },
})
}

section1Animation();
section2Animation();