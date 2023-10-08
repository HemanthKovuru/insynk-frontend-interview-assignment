import { Expense } from "../../interfaces/global";
import { convertNumToStr } from "../../utils";
import styles from "./SingleExpense.module.scss";

interface SingleExpenseProps {
  expense: Expense;
}

const SingleExpense = ({ expense }: SingleExpenseProps) => {
  return (
    <div
      className={`${styles.container} ${
        expense.type === "Cash In" && styles.cashIn
      }`}
    >
      <div className={styles.expenseType}>{expense.category}</div>
      <div className={styles.price}>
        {convertNumToStr(expense.amount, expense.type)}
      </div>
    </div>
  );
};

export default SingleExpense;
