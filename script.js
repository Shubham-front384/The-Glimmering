gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector("header");
const img = document.querySelector(".heroImg img");
const heroDetails = document.querySelector(".gripnr-details");
const video = document.querySelector(".canvas_media video");
const menuIcon = document.querySelector(".icon-to-open");
const closeIcon = document.querySelector(".icon-to-close");
const menuPath = document.querySelectorAll(".icon-to-open svg path");
const closePath = document.querySelectorAll(".icon-to-close svg path");
const menuInfo = document.querySelector(".menu-infos");
const menuName = document.querySelector(".menuName");
const closeName = document.querySelector(".closeName");
const hero = document.querySelector(".home-section");
const heroImg = document.querySelector(".hero-logo-img");

// INTRO
const headBackdrop = document.querySelector(".head_backdrop");

// -------------------- SCROLL BLUR EFFECT WITH GSAP --------------------
window.addEventListener("scroll", () => {
  const halfHero = 200;
  const scrollPos = window.scrollY;

  if (scrollPos > halfHero) {
    header.classList.add("header-blur");
    heroImg.style.opacity = 1;
  } else {
    header.classList.remove("header-blur");
    heroImg.style.opacity = 0;
  }
});
// Intro Animation
const intro = gsap.timeline();

intro.from(header, {
  y: -20,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})
.from(img, {
  y: 20,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8")
.from(heroDetails, {
  y: 20,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.8")
.from(video, {
  opacity: 0,
  duration: 1
}, "-=1");


// -------------------- MENU OPEN --------------------
menuIcon.addEventListener("click", () => {

  console.log(img);
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" }
  });

  tl.to(menuPath, { 
    x: -100,
    stagger: 0.05,
    duration: 0.35
  }, 0)

  .to(menuIcon, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.25
  }, 0.1)

  .to(menuInfo, {
    opacity: 1,
    y: "0%",
    duration: 0.45,
    ease: "power2.in",
  }, "-=0.1")

  .to(closeIcon, {
    opacity: 1,
    pointerEvents: "auto",
    rotate: 90,
    duration: 0.35
  }, "-=0.25")

  .to(menuName, {
    opacity: 0,
    duration: 0.2
  }, "-=0.2")

  .to(closeName, {
    opacity: 1,
    duration: 0.25
  }, "-=0.2");
});


// -------------------- MENU CLOSE --------------------
closeIcon.addEventListener("click", () => {

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut" }
  });

  tl.to(closeIcon, {
    opacity: 0,
    pointerEvents: "none",
    rotate: 0,
    duration: 0.3
  }, 0)

  .to(closeName, {
    opacity: 0,
    duration: 0.25
  }, "-=0.2")

  .to(menuInfo, {
    opacity: 0,
    y: "100%",
    duration: 0.45,
    ease: "power2.out",
  }, "-=0.1")

  .to(menuIcon, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.3
  }, "-=0.3")

  .to(menuPath, {
    x: 0,
    stagger: 0.05,
    duration: 0.35
  }, "-=0.25")

  .to(menuName, {
    opacity: 1,
    duration: 0.25
  }, "-=0.2");
});

// -------------------- TABLETOP --------------------
gsap.registerPlugin(ScrollTrigger);

gsap.to(headBackdrop, {
  x: 250,
  ease: "none",
  scrollTrigger: {
    trigger: ".intro",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
  }
});
