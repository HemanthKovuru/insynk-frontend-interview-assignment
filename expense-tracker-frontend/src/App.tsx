import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/Expense/Expense";
import Category from "./pages/Category/Category";
import { setInitialData } from "./utils";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/add-expense", element: <AddExpense /> },
    { path: "/edit-expense/:expenseId", element: <AddExpense /> },
    { path: "/category", element: <Category /> },
  ]);

  setInitialData();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
