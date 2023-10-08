import styles from "./ExpenseHeader.module.scss";

const ExpenseHeader = () => {
  return (
    <div className={styles.head}>
      <div className={styles.date}>7/2021</div>
      <div className={styles.expense}>-¥2000</div>
    </div>
  );
};

export default ExpenseHeader;
