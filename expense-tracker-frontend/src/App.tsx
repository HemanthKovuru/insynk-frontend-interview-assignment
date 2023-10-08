import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/Expense/Expense";
import Category from "./pages/Category/Category";
import { useEffect } from "react";
import { categoriesData, expenses } from "./interfaces/global";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/add-expense", element: <AddExpense /> },
    { path: "/edit-expense/:expenseId", element: <AddExpense /> },
    { path: "/category", element: <Category /> },
  ]);

  const setInitialData = () => {
    const cats = JSON.parse(
      localStorage.getItem("categories") ?? JSON.stringify(categoriesData)
    );
    const tempExpenses = JSON.parse(
      localStorage.getItem("expenses") ?? JSON.stringify(expenses)
    );
    localStorage.setItem("categories", JSON.stringify(cats));
    localStorage.setItem("expenses", JSON.stringify(tempExpenses));
  };

  useEffect(() => {
    setInitialData();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
