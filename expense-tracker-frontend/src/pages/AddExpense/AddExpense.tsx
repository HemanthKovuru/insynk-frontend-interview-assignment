import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Expense,
  ExpenseCategory,
  ExpenseTypeEnum,
} from "../../interfaces/global";
import AddEditExpense from "../../components/AddEditExpense/AddEditExpense";
import { useParams } from "react-router-dom";

const AddExpense = () => {
  const { expenseId } = useParams();
  const expenses = JSON.parse(localStorage.getItem("expenses") as string);
  const singleExpense = expenses.find(
    (expense: Expense) => expense.id === parseInt(expenseId as string)
  );

  console.log("expenseId", expenseId);

  const Categories = JSON.parse(localStorage.getItem("categories") as string);
  const [expense, setExpense] = useState<Expense>({
    id: Math.round(Math.random() * 100000),
    type: ExpenseTypeEnum.CashIn,
    category: Categories[0], // Default to the first category
    date: new Date(),
    amount: 0,
    description: "",
  });

  useEffect(() => {
    if (expenseId) {
      setExpense(singleExpense);
    }
  }, [expenseId]);

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
    console.log("easdasda", expense);
  };

  if (!singleExpense) {
    return <div>The expense you are looking for is not there bro {`:(`}</div>;
  } else {
    return (
      <div>
        <Navbar name={expenseId ? "Edit Expense" : "Add Expense"} />
        <AddEditExpense
          expense={expense}
          handleCategoryChange={handleCategoryChange}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleTypeButtonClick={handleTypeButtonClick}
          expenseId={expenseId as string}
        />
      </div>
    );
  }
};

export default AddExpense;
