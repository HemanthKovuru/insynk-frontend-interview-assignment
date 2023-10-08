import styles from "./BottomBar.module.scss";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className={styles.navBtns}>
      <Link to={"/"} className={styles.expense}>
        Expense
      </Link>
      <Link to={"/category"} className={styles.category}>
        Category
      </Link>
    </div>
  );
};

export default BottomBar;
