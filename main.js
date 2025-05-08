const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const homeSection = document.querySelector(".home");

// Background images for the hero section
const backgroundImages = [
  "img/hero/hero1.jpg",
  "img/hero/hero2.jpg",
  "img/hero/hero3.jpg",
  "img/hero/hero5.jpg",
  "img/hero/hero4.jpg",
];

// Preload all images to prevent black flashes
function preloadImages() {
  backgroundImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Call preload function
preloadImages();

// Create two background elements for crossfade
const bg1 = document.createElement("div");
bg1.className = "bg-slide active";
bg1.style.backgroundImage = `url(${backgroundImages[0]})`;
homeSection.appendChild(bg1);

const bg2 = document.createElement("div");
bg2.className = "bg-slide";
homeSection.appendChild(bg2);

let currentIndex = 0;
let activeSlide = bg1;
let inactiveSlide = bg2;

// Function to change background with crossfade
function changeBackground() {
  // Calculate next image index
  currentIndex = (currentIndex + 1) % backgroundImages.length;

  // Set the new image on the inactive slide
  inactiveSlide.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;

  // Swap active/inactive classes to trigger the transition
  activeSlide.classList.remove("active");
  inactiveSlide.classList.add("active");

  // Swap the slide references
  [activeSlide, inactiveSlide] = [inactiveSlide, activeSlide];
}

// Change background every 10 seconds
setInterval(changeBackground, 10000);

// Header sticky on scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile menu toggle
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close mobile menu on scroll
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
