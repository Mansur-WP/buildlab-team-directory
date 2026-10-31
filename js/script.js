const navigationToggle = document.querySelector(".join-menu-toggle");
const navigation = document.querySelector("#join-navigation");

if (navigationToggle && navigation) {
  navigationToggle.addEventListener("click", () => {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });
}

const joinForm = document.querySelector("#join-form");

if (joinForm) {
  const feedback = document.querySelector("#form-feedback");

  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";

    if (!joinForm.reportValidity()) {
      return;
    }

    feedback.textContent = "Your note has not been sent because this form is not connected to a submission service yet.";
  });
}

const menuToggle = document.querySelector(".bl-menu-toggle");
const primaryNavigation = document.querySelector(".bl-nav");

if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNavigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNavigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const revealItems = document.querySelectorAll(".bl-value-card, .bl-feature-card");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealItems.forEach((item) => item.classList.add("bl-reveal"));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
