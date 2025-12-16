const submitBtn = document.getElementById("contactForm");
const modal = document.querySelector(".contact-form-container");
const overlay = document.getElementById("overlay");

export function formValidations() {
  submitBtn.addEventListener("submit", (event) => {
    const errorElements = document.querySelectorAll(".error-message");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    errorElements.forEach((e) => {
      e.style.display = "none";
    });

    let isValid = true;
    event.preventDefault();

    if (name === "") {
      errorElements[0].textContent = "Name is required";
      errorElements[0].style.display = "block";
      //   console.log("name is requiered");
      isValid = false;
    }
    const emailRegex = /\w+@[a-zA-Z]+\.[a-zA-Z]/;

    if (email === "" || !emailRegex.test(email)) {
      errorElements[1].textContent = "Valid email is required";
      errorElements[1].style.display = "block";
      isValid = false;
    }

    if (message === "") {
      errorElements[2].textContent = "Message is required";
      errorElements[2].style.display = "block";
      isValid = false;
    }

    console.log(isValid);
    if (isValid) {
      alert("Form submitted successfully!");
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  });
}
