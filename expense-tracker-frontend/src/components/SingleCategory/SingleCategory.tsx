import { useState } from "react";
import { ExpenseCategory } from "../../interfaces/global";
import styles from "./SingleCategory.module.scss";
import RemoveModal from "../RemoveModal/RemoveModal";

interface SingleCategoryProps {
  category: ExpenseCategory;
  deleteCategoryByName: (categoryName: string, isMain: boolean) => void;
}

const SingleCategory = ({
  category,
  deleteCategoryByName,
}: SingleCategoryProps) => {
  const [removePop, setRemovePop] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.category}>{category.name}</div>
      <button onClick={() => setRemovePop(true)} className={styles.remove}>
        X
      </button>
      {removePop && (
        <RemoveModal
          setRemovePop={setRemovePop}
          category={category}
          deleteCategoryByName={deleteCategoryByName}
        />
      )}
    </div>
  );
};

export default SingleCategory;
