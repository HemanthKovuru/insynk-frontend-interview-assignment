// initial data
enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

export interface ExpenseCategory {
  name: string;
  isMain: boolean;
  order: number;
}

export const categoriesData: ExpenseCategory[] = [
  { isMain: true, order: 1, name: "Food" },
  { isMain: true, order: 2, name: "Transportation" },
  { isMain: true, order: 3, name: "Work" },
  { isMain: true, order: 4, name: "Entertainment" },
  { isMain: false, order: 5, name: "Traveling" },
];

export interface ExpenseHeaderProps {
  month: string;
  expenses: Expense[];
}

export interface ExpenseCardProps {
  expense: ExpenseHeaderProps;
}

export interface Expense {
  id: number;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: ExpenseTypeEnum;
}

export const expenses: Expense[] = [
  {
    id: 1,
    date: new Date("2023-10-01"),
    description: "Groceries",
    amount: 50.0,
    category: "Food", // Specify the category name directly
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 2,
    date: new Date("2023-10-05"),
    description: "Salary",
    amount: 1000.0,
    category: "Entertainment", // Specify the category name directly
    type: ExpenseTypeEnum.CashIn,
  },
  {
    id: 3,
    date: new Date("2023-9-10"),
    description: "Gasoline",
    amount: 40.0,
    category: "Transportation", // Specify the category name directly
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 4,
    date: new Date("2023-7-15"),
    description: "Phone Bill",
    amount: 60.0,
    category: "Work", // Specify the category name directly
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 5,
    date: new Date("2023-4-20"),
    description: "Dinner with Friends",
    amount: 75.0,
    category: "Entertainment", // Specify the category name directly
    type: ExpenseTypeEnum.CashOut,
  },
];
