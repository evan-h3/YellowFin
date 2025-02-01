import React from "react";

function Contact() {
    return (
        <section id="contact" className="section animated fadeIn">
            <h2>Contact Us</h2>
            <p>
                We welcome your questions, suggestions, and opportunities for collaboration. Please get in
                touch.
            </p>
            <form id="contactForm" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will get back to you soon.'); }}>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact; 