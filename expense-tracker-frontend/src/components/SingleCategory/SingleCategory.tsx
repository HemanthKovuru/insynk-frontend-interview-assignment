import { useState } from "react";
import { SingleCategoryProps } from "../../interfaces/global";
import styles from "./SingleCategory.module.scss";
import RemoveModal from "../RemoveModal/RemoveModal";

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
