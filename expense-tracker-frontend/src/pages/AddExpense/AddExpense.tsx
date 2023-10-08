import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./AddExpense.module.scss";
import {
  Expense,
  ExpenseCategory,
  ExpenseTypeEnum,
} from "../../interfaces/global";

const AddExpense: React.FC = () => {
  const Categories = JSON.parse(localStorage.getItem("categories") as string);
  const [expense, setExpense] = useState<Expense>({
    id: Math.round(Math.random() * 100000),
    type: ExpenseTypeEnum.CashIn,
    category: Categories[0], // Default to the first category
    date: new Date(),
    amount: 0,
    description: "",
  });

  // 1.] update expense type
  const handleTypeButtonClick = (type: ExpenseTypeEnum) => {
    setExpense({ ...expense, type });
  };

  // 2.] update category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryName = e.target.value;
    const selectedCategory = Categories.find(
      (category: ExpenseCategory) => category.name === selectedCategoryName
    );

    if (selectedCategory) {
      setExpense({ ...expense, category: selectedCategory.name });
    }
  };

  // 3.] update amount, date, desc
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  // 4.] add expnese to the list
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (expense.amount <= 0) {
      alert("Please enter amount");
      return;
    }

    const expenses = JSON.parse(localStorage.getItem("expenses") as string);
    if (expenses) {
      expenses.push({ ...expense, amount: expense.amount * 1 });
      localStorage.setItem("expenses", JSON.stringify(expenses));

      alert("Expense added");
    }
    // Handle the submission of the expense data here
    console.log("easdasda", expense);
  };

  return (
    <div>
      <Navbar name="Add Expense" />
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
                expense.type === ExpenseTypeEnum.CashOut
                  ? "#4b97f2"
                  : "#c5d7ee",
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
          <button
            onClick={(e) => handleSubmit(e)}
            className={styles.btnFull}
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
