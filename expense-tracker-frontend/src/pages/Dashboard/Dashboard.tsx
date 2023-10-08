import BottomBar from "../../components/BottomBar/BottomBar";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.scss";
import { ExpenseHeaderProps } from "./../../interfaces/global";
import { groupExpensesByMonth, setInitialData } from "../../utils";
import { useEffect } from "react";

const Dashboard = () => {
  // group expense by month
  let expenses = JSON.parse(localStorage.getItem("expenses") as string);
  if (expenses) {
    expenses = groupExpensesByMonth(expenses);
  }

  useEffect(() => {
    setInitialData();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar name="Expense Tracking" buttonText="Add" />
      <div className={styles.cardsContainer}>
        {expenses?.map((expense: ExpenseHeaderProps) => (
          <ExpenseCard expense={expense} />
        ))}
      </div>
      <BottomBar />
    </div>
  );
};

export default Dashboard;
