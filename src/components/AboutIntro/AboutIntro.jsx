import React from "react";
import styles from "./AboutIntro.module.css";
import aboutImg from "../../assets/about.photo.jpg"; 

const AboutIntro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <h2>Bienvenue !</h2>
        <p>
         Je suis Anastasiia, photographe et vidéaste professionnelle originaire d’Ukraine, aujourd’hui basée en Europe. J’accompagne les particuliers et les entreprises à travers des images authentiques, élégantes et pleines d’émotion.

Mon objectif : capturer vos instants précieux et créer du contenu visuel qui met en valeur votre personnalité, votre marque ou votre événement.
        </p>
        <p>
          Mon style : naturel, moderne et raffiné.
Mon approche : comprendre vos besoins et transformer vos idées en images qui racontent votre histoire.

        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={aboutImg} alt="Anastasia Syrmais" />
      </div>
    </section>
  );
};

export default AboutIntro;
