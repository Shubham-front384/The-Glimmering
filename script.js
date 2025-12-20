gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector(".circle");
const header = document.querySelector('header');
const img = document.querySelector('.heroImg img');
const heroDetails = document.querySelector('.gripnr-details');
const video = document.querySelector('.canvas_media video');
const menuIcon = document.querySelector('.icon-to-open');
const closeIcon = document.querySelector('.icon-to-close');
const menuPath = document.querySelectorAll('.icon-to-open svg path');
const closePath = document.querySelectorAll('.icon-to-close svg path');
const menuInfo = document.querySelector('.menu-infos');
const menuName = document.querySelector('.menuName');
const closeName = document.querySelector('.closeName');
const hero = document.querySelector('.home-section');
const heroImg = document.querySelector('.hero-logo-img');

// INTRO
const headBackdrop = document.querySelector('.head_backdrop');
const tableTop = document.querySelector('.tabletop');
const mediaImage = document.querySelector('.media_image');
const headTitle = document.querySelectorAll('.head-title span');
const contentText = document.querySelectorAll('.content-text p');

// FEATURES
const features = document.querySelector(".features");
const howTitle = document.querySelectorAll(".how-title span");
const gameBackdrop = document.querySelector(".game_backdrop");

// -------------------- FOLLOW CIRCLE --------------------
document.body.addEventListener("mousemove", (e) => {
  circle.style.opacity = 1;
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});

// -------------------- SCROLL BLUR EFFECT WITH GSAP --------------------
window.addEventListener('scroll', () => {
  const halfHero = 200;
  const scrollPos = window.scrollY;

  if (scrollPos > halfHero) {
    header.classList.add('header-blur');
    heroImg.style.opacity = 1;
  } else {
    header.classList.remove('header-blur');
    heroImg.style.opacity = 0;
  }
});
// Intro Animation
const intro = gsap.timeline();

intro
  .from(header, {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
  .from(
    img,
    {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    },
    '-=0.8'
  )
  .from(
    heroDetails,
    {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    },
    '-=0.8'
  )
  // intro image
  .from(
    mediaImage,
    {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    },
    '-=0.8'
  )
  .from(
    video,
    {
      opacity: 0,
      duration: 1,
    },
    '-=1'
  );

// -------------------- MENU OPEN --------------------
menuIcon.addEventListener('click', () => {
  console.log(img);
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
  });

  tl.to(
    menuPath,
    {
      x: -100,
      stagger: 0.05,
      duration: 0.35,
    },
    0
  )

    .to(
      menuIcon,
      {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.25,
      },
      0.1
    )

    .to(
      menuInfo,
      {
        opacity: 1,
        y: '0%',
        duration: 0.45,
        ease: 'power2.in',
      },
      '-=0.1'
    )

    .to(
      closeIcon,
      {
        opacity: 1,
        pointerEvents: 'auto',
        rotate: 90,
        duration: 0.35,
      },
      '-=0.25'
    )

    .to(
      menuName,
      {
        opacity: 0,
        duration: 0.2,
      },
      '-=0.2'
    )

    .to(
      closeName,
      {
        opacity: 1,
        duration: 0.25,
      },
      '-=0.2'
    );
});

// -------------------- MENU CLOSE --------------------
closeIcon.addEventListener('click', () => {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.inOut' },
  });

  tl.to(
    closeIcon,
    {
      opacity: 0,
      pointerEvents: 'none',
      rotate: 0,
      duration: 0.3,
    },
    0
  )

    .to(
      closeName,
      {
        opacity: 0,
        duration: 0.25,
      },
      '-=0.2'
    )

    .to(
      menuInfo,
      {
        opacity: 0,
        y: '100%',
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.1'
    )

    .to(
      menuIcon,
      {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      },
      '-=0.3'
    )

    .to(
      menuPath,
      {
        x: 0,
        stagger: 0.05,
        duration: 0.35,
      },
      '-=0.25'
    )

    .to(
      menuName,
      {
        opacity: 1,
        duration: 0.25,
      },
      '-=0.2'
    );
});

// -------------------- TABLETOP --------------------
gsap.to(headBackdrop, {
  x: 25,
  ease: 'none',
  scrollTrigger: {
    trigger: '.intro',
    start: 'top center',
    end: 'bottom center',
    scrub: 5,
  },
});

gsap.to(tableTop, {
  x: 25,
  ease: 'none',
  scrollTrigger: {
    trigger: '.intro',
    start: 'top center',
    end: 'bottom center',
    scrub: window.innerWidth > 1024 ? 2 : 1,
  },
});

// -------------------- HEADING & PARA --------------------
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro',
    start: 'top center',
    end: 'bottom top',
  },
});

tl.from(headTitle, {
  opacity: 0,
  y: () => window.innerWidth > 1024 ? 20 : 200,
  duration: 1,
  stagger: 0.2,
})
.from(headBackdrop, {
  opacity: 0,
  y: () => window.innerWidth > 1024 ? 20 : 200,
})

gsap.from(contentText, {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section_head',
    start: "top 60%",
  }
});

// -------------------- FEATURE HEADING --------------------
gsap.to(howTitle, {
  x: 25,
  ease: 'none',
  scrollTrigger: {
    trigger: features,
    start: 'top center',
    end: 'bottom center',
    scrub: 5,
  },
});

gsap.to(gameBackdrop, {
  x: 25,
  ease: 'none',
  scrollTrigger: {
    trigger: features,
    start: 'top center',
    end: 'bottom center',
    scrub: window.innerWidth > 1024 ? 2 : 1,
  },
});

// -------------------- FEATURES SWIPER --------------------
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  speed: 700,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  on: {
    init() {
      const slides = this.slides;
      gsap.set(slides, { opacity: 0.75 });
      gsap.set(this.slides[this.activeIndex], { opacity: 1 });

      togglePrevButton(this);
    },

    slideChangeTransitionStart() {
      const slides = this.slides;
      const active = slides[this.activeIndex];
      const prev = slides[this.previousIndex];

      gsap.to(prev, {
        opacity: 0.75,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(active, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      togglePrevButton(this);
    },
  },
});

function togglePrevButton(swiper) {
  const prevBtn = document.querySelector(".swiper-button-prev");

  if (swiper.isBeginning) {
    prevBtn.classList.add("swiper-button-disabled");
  } else {
    prevBtn.classList.remove("swiper-button-disabled");
  }
}
