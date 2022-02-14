import React from "react";

import styles from "./styles.module.scss";

type chooseLang = boolean;
type logOut = boolean;
interface Props {
  chooseLang?: chooseLang;
  logOutBtn?: logOut;
}

const Header = (props: Props) => {
  const { chooseLang, logOutBtn } = props;

  return (
    <header>
      <button type="button" className={styles.logo}>
        Linkstagram
      </button>

      {chooseLang && (
        <select className={styles.chooseLang}>
          <option>EN</option>
          <option>PL</option>
          <option>UA</option>
          <option>RU</option>
        </select>
      )}
      {logOutBtn && (
        <button className={styles.logOut} type="button">
          Log out
        </button>
      )}
    </header>
  );
};

Header.defaultProps = { chooseLang: false, logOutBtn: false };

export default Header;
