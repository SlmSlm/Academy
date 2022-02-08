import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <button className={styles.logo}>Linkstagram</button>
      <select>
        <option>EN</option>
      </select>
    </header>
  );
};

export default Header;
