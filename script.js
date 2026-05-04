// ================= SMOOTH SCROLL =================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll("section");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initial state (hidden)
reveals.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all 0.8s ease";
});

// ================= SKILL CARD ANIMATION =================
const skillCards = document.querySelectorAll(".skill-card");

function animateSkills() {
  const windowHeight = window.innerHeight;

  skillCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < windowHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initial state for skills
skillCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
});

// ================= NAV ACTIVE LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function highlightNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

// ================= EVENT LISTENERS =================
window.addEventListener("scroll", () => {
  revealOnScroll();
  animateSkills();
  highlightNav();
});

// Run once on load
revealOnScroll();
animateSkills();