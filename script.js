const panel = document.querySelector("#request-panel");
const serviceInput = document.querySelector("#service");
const detailsInput = document.querySelector("#details");

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    serviceInput.value = button.dataset.service;
    document.querySelector("#request-title").textContent = `Opdracht: ${button.dataset.service}`;
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    detailsInput.focus({ preventScroll: true });
  });
});

document.querySelector("#close-form").addEventListener("click", () => {
  panel.hidden = true;
});

document.querySelector("#request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const subject = encodeURIComponent(`Nieuwe Fioverr-opdracht: ${serviceInput.value}`);
  const body = encodeURIComponent(
    `Soort opdracht: ${serviceInput.value}\n\nOmschrijving:\n${detailsInput.value}`
  );
  // Vervang dit e-mailadres door jullie eigen contactadres.
  window.location.href = `mailto: jullie-email@voorbeeld.nl?subject=${subject}&body=${body}`;
});
