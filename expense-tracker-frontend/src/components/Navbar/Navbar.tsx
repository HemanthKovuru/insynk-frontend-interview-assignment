import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  name: string;
  buttonText?: string;
  // onClick?: () => void;
}

const Navbar = ({ name, buttonText }: NavbarProps) => {
  return (
    <div className={`${styles.navbar} ${!buttonText && styles.addition}`}>
      {buttonText && <div className={styles.empty}></div>}
      <div className={styles.name}>{name}</div>
      {buttonText && (
        <Link to={"/add-expense"} className={styles.btn}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Navbar;
