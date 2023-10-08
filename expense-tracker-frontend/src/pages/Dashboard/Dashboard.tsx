import BottomBar from "../../components/BottomBar/BottomBar";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.scss";
import { ExpenseHeaderProps } from "./../../interfaces/global";
import { groupExpensesByMonth, setInitialData } from "../../utils";

const Dashboard = () => {
  setInitialData();
  let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
  // group expense by month
  if (expenses) {
    expenses = groupExpensesByMonth(expenses);
  }

  return (
    <div className={styles.container}>
      <Navbar name="Expense Tracking" buttonText="Add" />
      <div className={styles.cardsContainer}>
        {expenses?.map((expense: ExpenseHeaderProps) => (
          <ExpenseCard key={expense.month} expense={expense} />
        ))}
      </div>
      <BottomBar />
    </div>
  );
};

export default Dashboard;
