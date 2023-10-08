import { Link } from "react-router-dom";
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
          <Link to={`/edit-expense/${expense.id}`}>
            <SingleExpense key={expense.id} expense={expense} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
