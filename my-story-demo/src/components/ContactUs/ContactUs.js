import "./ContactUs.css";

export default function ContactUs() {
  return (
    <form id="contactForm">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@email.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
        ></textarea>
      </div>
      <div className="btns">
        <button type="submit" className="submit-button" id="submit-btn">
          Send Message
        </button>
      </div>
    </form>
  );
}
