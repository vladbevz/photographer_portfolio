import React, { useState } from "react";
import styles from "./ContactsComponent.module.css";

const ContactsComponent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Дякую! Повідомлення відправлено.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.hero}>
        <h1>Contact</h1>
        <p>Звʼяжіться зі мною для вашої фотосесії</p>
      </div>

      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Повідомлення"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />
          <button type="submit">Відправити</button>
        </form>

        <div className={styles.info}>
          <p>Email: <a href="mailto:contact@anastasia.com">contact@anastasia.com</a></p>
          <p>Телефон: <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>

          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://telegram.me" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="Studio Nîmes"
              src="https://maps.google.com/maps?q=Nîmes&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;
