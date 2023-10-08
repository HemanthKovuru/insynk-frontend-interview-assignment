import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./AddExpense.module.scss";

enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

interface Category {
  name: string;
  isMain: boolean;
  order: number;
}

interface Expense {
  type: ExpenseTypeEnum;
  category: Category;
  date: Date;
  amount: number;
  description: string;
}

const Categories: Category[] = [
  { isMain: true, order: 1, name: "Food" },
  { isMain: true, order: 2, name: "Transportation" },
  { isMain: true, order: 3, name: "Work" },
  { isMain: false, order: 4, name: "Traveling" },
];

const AddExpense: React.FC = () => {
  const [expense, setExpense] = useState<Expense>({
    type: ExpenseTypeEnum.CashIn,
    category: Categories[0], // Default to the first category
    date: new Date(),
    amount: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryName = e.target.value;
    const selectedCategory = Categories.find(
      (category) => category.name === selectedCategoryName
    );

    if (selectedCategory) {
      setExpense({ ...expense, category: selectedCategory });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the submission of the expense data here
    console.log(expense);
  };

  const handleTypeButtonClick = (type: ExpenseTypeEnum) => {
    setExpense({ ...expense, type });
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.item}>
            <label className={styles.label}>Category:</label>
            <select
              name="category"
              value={expense.category.name}
              onChange={handleCategoryChange}
            >
              {Categories.map((category) => (
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
              value={expense.date.toISOString().split("T")[0]}
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
          <button className={styles.btnFull} type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
