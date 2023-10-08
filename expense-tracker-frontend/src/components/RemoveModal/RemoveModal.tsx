import { ExpenseCategory } from "../../interfaces/global";
import styles from "./RemoveModal.module.scss";

interface RemoveModalProps {
  category: ExpenseCategory;
  deleteCategoryByName: (categoryName: string, isMain: boolean) => void;
  setRemovePop: (value: boolean) => void;
}

const RemoveModal = ({
  category,
  deleteCategoryByName,
  setRemovePop,
}: RemoveModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ul>
          <li>{category.name} will be removed</li>
          <li>All expense with this category will alos removed</li>
        </ul>
        <div>Do you really want to remove?</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.navBtns}>
          <button onClick={() => setRemovePop(false)} className={styles.cancel}>
            Cancel
          </button>
          <button
            onClick={() => {
              deleteCategoryByName(category.name, category.isMain);
              // setRemovePop(false);
            }}
            className={styles.confirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
