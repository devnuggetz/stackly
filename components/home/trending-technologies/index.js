import React from "react";
import styles from "./trending-technologies.module.css";

function TrendingTechnologies() {
  return (
    <div className={styles.trendContainer}>
      <div className={styles.trendSection}>
        <lable className={styles.trendHeading}>Trending Technologies</lable>
      </div>
      <div className={styles.trendSection}>
        <div className={styles.trendCards}></div>
      </div>
    </div>
  );
}

export default TrendingTechnologies;
