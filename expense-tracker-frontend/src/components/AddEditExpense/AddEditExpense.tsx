import styles from "./AddEditExpense.module.scss";
import {
  Expense,
  ExpenseCategory,
  ExpenseTypeEnum,
} from "../../interfaces/global";
import { Link } from "react-router-dom";

interface AddEditExpenseProps {
  expense: Expense;
  handleTypeButtonClick: (type: ExpenseTypeEnum) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  expenseId: string;
}

const AddEditExpense = ({
  expense,
  handleTypeButtonClick,
  handleSubmit,
  handleCategoryChange,
  handleChange,
  expenseId,
}: AddEditExpenseProps) => {
  const Categories = JSON.parse(localStorage.getItem("categories") as string);
  const expenses = JSON.parse(localStorage.getItem("expenses") as string);

  const findExpenseByIdAndUpdate = (data: Expense[], newData: Expense) => {
    const updatedData = data.map((expense) => {
      if (expense.id === parseInt(expenseId)) {
        return { ...newData };
      }
      return expense;
    });

    localStorage.setItem("expenses", JSON.stringify(updatedData));
    alert("Expense updated..!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>Type</div>
      <div className={styles.expenseType}>
        <button
          onClick={() => handleTypeButtonClick(ExpenseTypeEnum.CashIn)}
          style={{
            backgroundColor:
              expense.type === ExpenseTypeEnum.CashIn ? "#4b97f2" : "#c5d7ee",
          }}
        >
          Cash In
        </button>
        <button
          onClick={() => handleTypeButtonClick(ExpenseTypeEnum.CashOut)}
          style={{
            backgroundColor:
              expense.type === ExpenseTypeEnum.CashOut ? "#4b97f2" : "#c5d7ee",
          }}
        >
          Cash Out
        </button>
      </div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.item}>
          <label className={styles.label}>Category:</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleCategoryChange}
          >
            {Categories.map((category: ExpenseCategory) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Amount:</label>
          <div className={styles.amountContainer}>
            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
            />
            <span className={styles.yen}>¥</span>
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Date:</label>
          <input
            type="date"
            name="date"
            value={new Date(expense.date).toISOString().split("T")[0]}
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Description:</label>
          <textarea
            name="description"
            value={expense.description}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={styles.btns}>
        <Link to={"/"} className={styles.btnOutline}>
          Cancel
        </Link>
        {expenseId ? (
          <button
            onClick={() => findExpenseByIdAndUpdate(expenses, expense)}
            className={styles.btnFull}
            type="submit"
          >
            Update
          </button>
        ) : (
          <button
            onClick={(e) => handleSubmit(e)}
            className={styles.btnFull}
            type="submit"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default AddEditExpense;
