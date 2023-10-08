import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/AddExpense/AddExpense";
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

  useEffect(() => {
    const cats = JSON.parse(localStorage.getItem("categories") as string);
    const tempExpenses = JSON.parse(localStorage.getItem("expenses") as string);
    if (!cats) {
      localStorage.setItem("categories", JSON.stringify(categoriesData));
    }
    if (!tempExpenses) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
