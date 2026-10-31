const aboutMenuToggle = document.querySelector("#menu-toggle");
const aboutNavigation = document.querySelector("#main-navigation");

if (aboutMenuToggle && aboutNavigation) {
  aboutMenuToggle.addEventListener("click", () => {
    const isExpanded = aboutMenuToggle.getAttribute("aria-expanded") === "true";
    aboutMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
    aboutMenuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    aboutNavigation.classList.toggle("is-open", !isExpanded);
  });
}

const aboutForm = document.querySelector(".about-page #join-form, body:not(.join-page) #join-form");

if (aboutForm) {
  aboutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = aboutForm.querySelector("#form-message");
    if (message) message.textContent = "Your introduction is ready. The final submission service will be connected before launch.";
  });
}

const footerYear = document.querySelector("#footer-year");
if (footerYear) footerYear.textContent = String(new Date().getFullYear());
