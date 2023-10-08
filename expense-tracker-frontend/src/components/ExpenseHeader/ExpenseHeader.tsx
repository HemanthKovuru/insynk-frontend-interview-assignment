import { ExpenseHeaderProps } from "../../interfaces/global";
import {
  calculateNetExpenses,
  convertDateToFormattedString,
} from "../../utils";
import styles from "./ExpenseHeader.module.scss";

const ExpenseHeader = ({ month, expenses }: ExpenseHeaderProps) => {
  return (
    <div className={styles.head}>
      <div className={styles.date}>{convertDateToFormattedString(month)}</div>
      <div className={styles.expense}>{calculateNetExpenses(expenses)}</div>
    </div>
  );
};

export default ExpenseHeader;
