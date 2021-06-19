import React from "react";
import styles from "./trending-technologies.module.css";
import { languageData } from "../../../data/language";
import LanguageCard from "./language-card";

function TrendingTechnologies() {
  const data = languageData;
  return (
    <div className={styles.trendContainer}>
      <div className={styles.trendSection}>
        <lable className={styles.trendHeading}>Trending Technologies</lable>
      </div>
      <div className={styles.trendSection}>
        <div className={styles.trendCards}>
          {data.map((item) => {
            return <LanguageCard language={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingTechnologies;
