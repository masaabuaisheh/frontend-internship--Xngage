export function contactUs() {
  const openBtn = document.querySelector(".openContactUs");
  const closeBtn = document.getElementsByClassName("close-button");
  const modal = document.querySelector(".contact-form-container");
  const errorElements = document.querySelectorAll(".error-message");
  const overlay = document.getElementById("overlay");

  openBtn.addEventListener("click", () => {
    // modal.classList.add("open");
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  console.log(openBtn, closeBtn, modal);

  closeBtn[1].addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    errorElements.forEach((e) => {
      e.style.display = "none";
    });
  });
}
