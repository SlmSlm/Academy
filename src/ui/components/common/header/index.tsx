import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <button type="button" className={styles.logo}>
        Linkstagram
      </button>

      <select className={styles.chooseLang}>
        <option>EN</option>
        <option>PL</option>
        <option>UA</option>
        <option>RU</option>
      </select>
    </header>
  );
};

export default Header;
