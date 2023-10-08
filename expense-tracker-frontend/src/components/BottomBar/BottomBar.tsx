import styles from "./BottomBar.module.scss";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.navBtns}>
      <Link
        to={"/"}
        className={`${styles.expense} ${pathname === "/" && styles.activePage}`}
      >
        Expense
      </Link>
      <Link
        to={"/category"}
        className={`${styles.category} ${
          pathname === "/category" && styles.activePage
        }`}
      >
        Category
      </Link>
    </div>
  );
};

export default BottomBar;
