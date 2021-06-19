import React from "react";
import AddButton from "./add-button";
import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <label>Stackly</label>
      <AddButton />
    </div>
  );
}

export default Header;
