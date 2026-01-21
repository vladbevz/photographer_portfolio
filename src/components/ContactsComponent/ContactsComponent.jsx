import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Send, Loader2, CheckCircle, XCircle, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import styles from "./ContactsComponent.module.css";
import contactImg from "../../assets/experience.webp";

const ContactsComponent = () => {
  const { t } = useTranslation("contacts");
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_bsaa2lb",
        "template_2f3i2fb",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "bevz.vlad15@gmail.com"
        },
        "mOTfvQqRtMuWQzOlM"
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.imageSide}>
        <div className={styles.imageWrapper}>
          <img 
            src={contactImg} 
            alt={t("form.imageAlt", "Photography studio")} 
            className={styles.image} 
          />
        </div>
      </div>

      <div className={styles.formSide}>
        <div>
          <h2 className={styles.title}>
            {t("title", "Get in Touch")}
          </h2>
          <p className={styles.subtitle}>
            {t("subtitle", "Ready to create something beautiful? Share your vision and let's bring it to life together.")}
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>{t("form.name", "Full Name")}</label>
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>{t("form.email", "Email Address")}</label>
          </div>
          
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
            <label>{t("form.message", "Your Message")}</label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${styles.submitBtn} ${
              status === "loading" ? styles.loading : ""
            }`}
          >
            {status === "loading" ? (
              <>
                <Loader2 className={styles.spinner} size={20} />
                {t("form.sending", "Sending Message")}
              </>
            ) : (
              t("form.submit", "Send Message")
            )}
          </button>

          {status === "success" && (
            <p className={`${styles.feedback} ${styles.success}`}>
              <CheckCircle size={18} />
              {t("form.success", "Your message has been sent successfully!")}
            </p>
          )}
          {status === "error" && (
            <p className={`${styles.feedback} ${styles.error}`}>
              <XCircle size={18} />
              {t("form.error", "Something went wrong. Please try again.")}
            </p>
          )}
        </form>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <strong>
              <Mail size={14} /> {t("info.contact", "Contact")}
            </strong>
            <a href="mailto:bevz.vlad15@gmail.com">bevz.vlad15@gmail.com</a>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
              {t("info.response", "Response within 24 hours")}
            </p>
          </div>
          
          <div className={styles.infoItem}>
            <strong>
              <MapPin size={14} /> {t("info.location", "Location")}
            </strong>
            <p>Nîmes, France</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
              {t("info.available", "Available for projects worldwide")}
            </p>
          </div>
        </div>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("social.instagram", "Instagram")}
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://t.me/anastasiiasyrmais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("social.telegram", "Telegram")}
          >
            <Send size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;