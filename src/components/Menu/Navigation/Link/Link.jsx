import styles from "./Link.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../../CurvedAnimation";
import { Link } from "react-router-dom";

const PageLink = ({ data, isActive, setSelectedIndicator }) => {
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(data?.href);
      }}
      custom={data?.index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <div>{data?.title}</div>
    </motion.div>
  );
};

export default PageLink;
