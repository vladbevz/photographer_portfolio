import React, { useState } from "react";
import styles from "./ContactsComponent.module.css";
import { Instagram, Send } from "lucide-react"; // красиві мінімалістичні іконки

import contactImg from "../../assets/experience.webp"; // твоє фото зліва

const ContactsComponent = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Дякую! Повідомлення відправлено.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.imageSide}>
        <img src={contactImg} alt="Contact" className={styles.image} />
      </div>

      <div className={styles.formSide}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Let’s talk about your project</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        <div className={styles.info}>
          <p>
            <strong>Contact</strong>
            <br />
            <a href="mailto:bevz.vlad15@gmail.com">
              bevz.vlad15@gmail.com
            </a>
          </p>
          <p>
            <strong>Based in</strong>
            <br />
            Nîmes, France
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://t.me/anastasiiasyrmais"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;

