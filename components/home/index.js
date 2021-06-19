import React from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import styles from "./home.module.css";
import HottestStartups from "./hottest-startups";
import TrendingTechnologies from "./trending-technologies/index";
function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.homeSection}>
        <TrendingTechnologies />
      </div>
      <div className={styles.homeSection}>
        <HottestStartups />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
