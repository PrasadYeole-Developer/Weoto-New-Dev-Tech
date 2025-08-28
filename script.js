let scroll;
let marqueeText = document.querySelector(".scrollTitle");
gsap.to(marqueeText, {
  x: "-200%",
  duration: 2000,
  repeat: -1,
  ease: "none",
});

let companiesMarquee = document.querySelector(".companies-marquee");
gsap.to(companiesMarquee, {
  xPercent: -80, // Move entire flex container left
  duration: 40, // Same speed as Framer Motion
  ease: "linear",
  repeat: -1, // Infinite loop
});

// Locomotive code
window.addEventListener("DOMContentLoaded", () => {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1.2, // scroll speed
    lerp: 0.06, // smoothness (0.1 ~ 0.5)
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
});

window.addEventListener("load", () => {
  if (scroll && typeof scroll.update === "function") {
    scroll.update();
  }
});

// Responsive hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".navbar_hamburgerMenu__Xx0LQ");
  const hamburgerMenu = document.getElementById("hamburger-main-menu");
  const subMenu = document.getElementById("hamburger-sub-menu");
  const closeButtons = document.querySelectorAll(
    ".navbar_hamburgerClose__0olZL"
  );
  const backButton = document.querySelector(
    ".navbar_hamburgerNavigateBack__Emvuz"
  );

  // Open main hamburger menu
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", () => {
      hamburgerMenu.classList.remove("navbar_hamburgerClosed__VETQ2");
      hamburgerMenu.classList.add("navbar_hamburgerOpen");

      // disable locomotive scroll
      if (scroll) scroll.stop();
    });
  }

  // Close menu(s) on close button click
  // Close menu(s) on close button click
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      hamburgerMenu.classList.remove("navbar_hamburgerOpen"); // 🔑 remove open class
      hamburgerMenu.classList.add("navbar_hamburgerClosed__VETQ2");
      subMenu.classList.remove("hamburgerSubMenuOpen");

      // enable locomotive scroll
      if (scroll) {
        scroll.start();
        scroll.update();
      }
    });
  });

  // Open sub-menu (all dropdowns)
  const dropdownLinks = document.querySelectorAll(
    ".navbar_hamburgerDropdown__l8ZgB"
  );
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      subMenu.classList.add("hamburgerSubMenuOpen");
    });
  });

  // Navigate back from sub-menu
  if (backButton) {
    backButton.addEventListener("click", () => {
      subMenu.classList.remove("hamburgerSubMenuOpen");
    });
  }
});

// Cursor
let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x - cursor.offsetHeight / 2,
    y: dets.y - cursor.offsetHeight / 2,
    duration: 0.7,
    ease: "back.out",
  });
});
