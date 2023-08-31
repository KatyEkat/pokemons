import React from "react";
import styles from "./Header.module.css";
import fingerimg from "../../img/clickHeaderIcon.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>ПОКЕМОНЫ API</button>

      <div className={styles.header}>
        <img src={fingerimg} alt="icon"></img>
        <h3 className={styles.heading}>
          Нажмите на нужного Покемона
        </h3>
      </div>
    </div>
  );
};

export default Header;
