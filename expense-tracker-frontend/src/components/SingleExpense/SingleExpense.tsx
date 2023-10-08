import styles from "./SingleExpense.module.scss";

const SingleExpense = () => {
  return (
    <div className={styles.container}>
      <div className={styles.expenseType}>Entertainment</div>
      <div className={styles.price}>-¥5000</div>
    </div>
  );
};

export default SingleExpense;
