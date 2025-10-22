import React, { useState } from "react";
import styles from "./ContactsComponent.module.css";
import { Instagram, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";
import contactImg from "../../assets/experience.webp";

const ContactsComponent = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_bsaa2lb", // ← твій service ID
        "template_2f3i2fb", // ← твій template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "mOTfvQqRtMuWQzOlM" // ← твій public key
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000); // після 3с приховуємо повідомлення
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
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

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${styles.submitBtn} ${
              status === "loading" ? styles.loading : ""
            }`}
          >
            {status === "loading" ? (
              <>
                <Loader2 className={styles.spinner} size={20} /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {status === "success" && (
            <p className={`${styles.feedback} ${styles.success}`}>
              <CheckCircle size={18} /> Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className={`${styles.feedback} ${styles.error}`}>
              <XCircle size={18} /> Something went wrong. Try again.
            </p>
          )}
        </form>

        <div className={styles.info}>
          <p>
            <strong>Contact</strong>
            <br />
            <a href="mailto:bevz.vlad15@gmail.com">bevz.vlad15@gmail.com</a>
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
