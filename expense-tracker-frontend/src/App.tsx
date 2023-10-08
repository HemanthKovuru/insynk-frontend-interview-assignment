import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddExpense from "./pages/AddExpense/AddExpense";
import Category from "./pages/Category/Category";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/add-expense", element: <AddExpense /> },
    { path: "/category", element: <Category /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
