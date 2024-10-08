import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import { AnimatePresence } from "framer-motion";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </>
  );
};

export default Menu;
