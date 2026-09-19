document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".primary-btn");
  const chatWidget = document.querySelector(".chat-widget");

  if (ctaButton && chatWidget) {
    ctaButton.addEventListener("click", () => {
      chatWidget.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }
});
