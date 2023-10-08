export interface NavbarProps {
  name: string;
  buttonText?: string;
}

export enum ExpenseTypeEnum {
  CashIn = "Cash In",
  CashOut = "Cash Out",
}

export interface ExpenseCategory {
  name: string;
  isMain: boolean;
  order: number;
}

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

export interface AddEditExpenseProps {
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

export interface RemoveModalProps {
  category: ExpenseCategory;
  deleteCategoryByName: (categoryName: string, isMain: boolean) => void;
  setRemovePop: (value: boolean) => void;
}

export interface SingleCategoryProps {
  category: ExpenseCategory;
  deleteCategoryByName: (categoryName: string, isMain: boolean) => void;
}

export interface SingleExpenseProps {
  expense: Expense;
}

// initial data
export const categoriesData: ExpenseCategory[] = [
  { isMain: true, order: 1, name: "Food" },
  { isMain: true, order: 2, name: "Transportation" },
  { isMain: true, order: 3, name: "Work" },
  { isMain: true, order: 4, name: "Entertainment" },
  { isMain: false, order: 5, name: "Traveling" },
];

export const expenses: Expense[] = [
  {
    id: 1,
    date: new Date("2023-10-01"),
    description: "Groceries",
    amount: 50.0,
    category: "Food",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 2,
    date: new Date("2023-10-05"),
    description: "Salary",
    amount: 1000.0,
    category: "Entertainment",
    type: ExpenseTypeEnum.CashIn,
  },
  {
    id: 3,
    date: new Date("2023-9-10"),
    description: "Gasoline",
    amount: 40.0,
    category: "Transportation",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 4,
    date: new Date("2023-7-15"),
    description: "Phone Bill",
    amount: 60.0,
    category: "Work",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 5,
    date: new Date("2023-4-20"),
    description: "Dinner with Friends",
    amount: 75.0,
    category: "Entertainment",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 6,
    date: new Date("2023-9-20"),
    description: "Lottery",
    amount: 10000,
    category: "Entertainment",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 7,
    date: new Date("2023-10-05"),
    description: "Cinema",
    amount: 525,
    category: "Entertainment",
    type: ExpenseTypeEnum.CashIn,
  },
  {
    id: 8,
    date: new Date("2023-7-15"),
    description: "Chai",
    amount: 50.0,
    category: "Food",
    type: ExpenseTypeEnum.CashOut,
  },
  {
    id: 9,
    date: new Date("2023-4-20"),
    description: "Gift from uncle",
    amount: 500,
    category: "Entertainment",
    type: ExpenseTypeEnum.CashOut,
  },
];
