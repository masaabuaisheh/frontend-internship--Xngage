// abstraction + encapsulation
export class Popup {
  constructor(buttonSelector, message) {
    this.button = document.querySelector(buttonSelector);
    this.message = message;
  }

  init() {
    if (!this.button) return;

    this.button.addEventListener("click", () => {
      this.open();
    });
  }

  open() {
    window.alert(this.message);
  }
}

// export function initialPopup() {
//   const popupBtn = document.querySelector(".learn-more-btn");
//   popupBtn.addEventListener("click", () => {
//     window.alert(
//       "Thank you for your interest. More details will be available shortly."
//     );
//   });
// }
