const navigationToggle = document.querySelector(".join-menu-toggle");
const navigation = document.querySelector("#join-navigation");

if (navigationToggle && navigation) {
  navigationToggle.addEventListener("click", () => {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });
}

const contributorJoinForm = document.querySelector("#join-form");

if (contributorJoinForm) {
  const feedback = document.querySelector("#form-feedback");

  contributorJoinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";

    if (!contributorJoinForm.reportValidity()) {
      return;
    }

    feedback.textContent = "Your note has not been sent because this form is not connected to a submission service yet.";
  });
}
