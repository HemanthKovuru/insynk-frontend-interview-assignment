import { Expense, categoriesData, expenses } from "../interfaces/global";

export const setCategories = (cats: [object]) => {
  if (!cats) {
    localStorage.setItem("categories", JSON.stringify(categoriesData));
  }
};

export const groupExpensesByMonth = (
  expenses: Expense[]
): { month: string; expenses: Expense[] }[] => {
  const groupedExpenses: Record<string, Expense[]> = {};

  // Sort expenses by date in descending order
  expenses.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  expenses.forEach((expense) => {
    const year = new Date(expense.date).getFullYear();
    const month = new Date(expense.date).getMonth();

    const monthKey = `${year}-${month}`;

    if (!groupedExpenses[monthKey]) {
      groupedExpenses[monthKey] = [];
    }

    groupedExpenses[monthKey].push(expense);
  });

  const result = Object.keys(groupedExpenses).map((monthKey) => ({
    month: monthKey,
    expenses: groupedExpenses[monthKey],
  }));

  return result;
};

export const calculateNetExpenses = (data: Expense[]): string => {
  let cashInTotal = 0;
  let cashOutTotal = 0;

  data.forEach((expense) => {
    if (expense.type === "Cash In") {
      cashInTotal += expense.amount * 1;
    } else if (expense.type === "Cash Out") {
      cashOutTotal += expense.amount * 1;
    }
  });

  const netExpense = cashInTotal - cashOutTotal;
  console.log(convertNumToStr(netExpense));

  return convertNumToStr(netExpense);
};

export const convertDateToFormattedString = (dateString: string): string => {
  const [year, month] = dateString.split("-");
  const formattedDate = `${Number(month) + 1}/${year}`;
  return formattedDate;
};

export const convertNumToStr = (expense: number, type?: string): string => {
  if (type === "Cash Out") {
    return `- ¥${Math.abs(expense)}`;
  }
  if (expense > 0) {
    return `+ ¥${expense}`;
  } else {
    return `- ¥${Math.abs(expense)}`;
  }
};

export const getData = (type: string) => {
  return JSON.parse(localStorage.getItem(type) || "");
};

export const setInitialData = () => {
  const cats = JSON.parse(localStorage.getItem("categories") as string);
  const tempExpenses = JSON.parse(localStorage.getItem("expenses") as string);
  if (!cats) {
    localStorage.setItem("categories", JSON.stringify(categoriesData));
  }
  if (!tempExpenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
};
