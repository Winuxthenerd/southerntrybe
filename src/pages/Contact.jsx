import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (not yet connected to a backend).");
  };

  return (
    <div className="page contact-page">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input type="text" required />
        </label>
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Message
          <textarea rows="5" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;