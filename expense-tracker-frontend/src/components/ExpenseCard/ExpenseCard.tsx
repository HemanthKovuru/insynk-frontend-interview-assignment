import { Expense, ExpenseCardProps } from "../../interfaces/global";
import ExpenseHeader from "../ExpenseHeader/ExpenseHeader";
import SingleExpense from "../SingleExpense/SingleExpense";
import styles from "./ExpenseCard.module.scss";

const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  console.log("expense", expense);

  return (
    <div>
      <ExpenseHeader month={expense.month} expenses={expense.expenses} />

      <div className={styles.expensesContainer}>
        {expense.expenses.map((expense: Expense) => (
          <SingleExpense expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
