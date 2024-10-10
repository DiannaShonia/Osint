import styles from "./Navigation.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../CurvedAnimation";
import PageLink from "./Link/Link";
import Curve from "./Curve/Curve";

const Navigation = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Scans",
      href: "/scans",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <PageLink
                key={index}
                data={{ ...data, index }}
              ></PageLink>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navigation;
