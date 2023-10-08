import BottomBar from "../../components/BottomBar/BottomBar";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar name="Expense Tracking" buttonText="Add" />
      <div className={styles.cardsContainer}>
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
      <BottomBar />
    </div>
  );
};

export default Dashboard;
