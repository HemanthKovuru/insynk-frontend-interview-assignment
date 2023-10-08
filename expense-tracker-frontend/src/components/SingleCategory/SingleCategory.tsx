import styles from "./SingleCategory.module.scss";

interface ExpenseCategory {
  name: string;
  isMain: boolean;
  order: number;
}
interface SingleCategoryProps {
  category: ExpenseCategory;
  deleteCategoryByName: (category: string, isMain: boolean) => void;
}

const SingleCategory = ({
  category,
  deleteCategoryByName,
}: SingleCategoryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{category.name}</div>
      <button
        onClick={() => deleteCategoryByName(category.name, category.isMain)}
        className={styles.remove}
      >
        X
      </button>
    </div>
  );
};

export default SingleCategory;
