import { Modal } from "../shared/modal.js";
export function contactUsButton() {
    const contactModal = new Modal();
    contactModal.setTitle("Contact Us Form");
    contactModal.setBody(contactUsUi());
    contactModal.buildModalUi();
    $(".openContactUs").on("click", () => {
        contactModal.show();
    });
    $(".overlay").on("click", () => {
        contactModal.hide();
    });
}
function contactUsUi() {
    return `
      <form id="contactForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
          <span class="error-message" id="emailError">vv</span>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            ></textarea>
            <span class="error-message" id="messageError"></span>
          </div>
          <div class="btns">
            <button type="submit" class="submit-button" id="submit-btn">
              Send Message
            </button>
          </div>
      </form>
        `;
}
