import ExpenseHeader from "../ExpenseHeader/ExpenseHeader";
import SingleExpense from "../SingleExpense/SingleExpense";
import styles from "./ExpenseCard.module.scss";

const ExpenseCard = () => {
  return (
    <div>
      <ExpenseHeader />

      <div className={styles.expensesContainer}>
        <SingleExpense />

        <SingleExpense />
      </div>
    </div>
  );
};

export default ExpenseCard;
