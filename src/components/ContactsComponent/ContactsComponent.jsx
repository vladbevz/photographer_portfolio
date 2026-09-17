import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Send, Loader2, CheckCircle, XCircle, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import styles from "./ContactsComponent.module.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const PORTRAIT_URL =
  "https://cdn.sanity.io/images/1pizw8xe/production/55a176228a5733dd9f2ca82d0e6e9825b9ea26a4-4000x6000.jpg?w=800&auto=format";

const ContactsComponent = () => {
  const { t } = useTranslation("contacts");
  const introRef = useScrollReveal();
  const panelRef = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
          to_email: "a.syrmais@gmail.com"
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
      <div className={styles.top} ref={introRef}>
        <div className={styles.portraitWrap}>
          <div className={styles.portraitFrame}>
            <img
              src={PORTRAIT_URL}
              alt={t("form.imageAlt", "Anastasia Syrmais, photographer")}
              className={styles.portraitImg}
            />
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>{t("eyebrow", "Get in Touch")}</p>
          <h1 className={styles.title}>{t("title", "Let's create something beautiful, together")}</h1>
          <p className={styles.subtitle}>
            {t("subtitle", "Based in Nîmes, available for sessions throughout France. Share your vision below — I personally reply to every message within 24 hours.")}
          </p>
        </div>
      </div>

      <div className={styles.panel} ref={panelRef}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="contact-name">{t("form.name", "Full Name")}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-email">{t("form.email", "Email Address")}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-message">{t("form.message", "Your Message")}</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.submitBtn}
          >
            {status === "loading" ? (
              <>
                <Loader2 className={styles.spinner} size={18} />
                {t("form.sending", "Sending Message")}
              </>
            ) : (
              <>
                {t("form.submit", "Send Message")}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
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

        <div className={styles.side}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>
              <Mail size={14} /> {t("info.contact", "Contact")}
            </div>
            <a href="mailto:a.syrmais@gmail.com">a.syrmais@gmail.com</a>
            <p className={styles.cardSub}>{t("info.response", "Response within 24 hours")}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardLabel}>
              <MapPin size={14} /> {t("info.location", "Location")}
            </div>
            <p>Nîmes, France</p>
            <p className={styles.cardSub}>{t("info.available", "Available throughout France")}</p>
          </div>

          <div className={styles.pills}>
            <a
              className={styles.pill}
              href="https://www.instagram.com/syrmais__photography?igsh=MTc5bjN5NXd0NnhjMA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={15} /> {t("social.instagram", "Instagram")}
            </a>
            <a
              className={styles.pill}
              href="https://t.me/anastasiiasyrmais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={15} /> {t("social.telegram", "Telegram")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;
