import styles from "./Navigation.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../CurvedAnimation";
import PageLink from "./Link/Link";
import Curve from "./Curve/Curve";



const Navigation = () => {
  //   const pathname = usePathname();
  //   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
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
          onMouseLeave={() => {
            // setSelectedIndicator(pathname);
          }}
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
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
              ></PageLink>
            );
          })}
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navigation;
