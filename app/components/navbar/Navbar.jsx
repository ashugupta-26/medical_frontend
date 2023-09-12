import React from "react";
import styles from "./styles.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11496/11496744.png"
              alt="logo"
              className={styles.img}
            />
          </div>
          <div className={styles.list}>
            <ul>
              <li>Home</li>
              <li>Appoinment</li>
              <li>facility</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button}>
          <span>Schedule</span>
          <button className={styles.login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
