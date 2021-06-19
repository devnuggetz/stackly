import React from "react";
import styles from "./language-card.module.css";
function LanguageCard({ language }) {
  return (
    <div className={styles.cardContainer}>
      <label className={styles.cardTitle}>{language.name}</label>
      <div className={styles.logoContainer}>{language.svg("#6563FF")}</div>
      <label className={styles.cardSubtitle}>Used by: {language.count}</label>
    </div>
  );
}

export default LanguageCard;
