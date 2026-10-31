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
