import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Category.module.scss";
import BottomBar from "../../components/BottomBar/BottomBar";
import RemoveModal from "../../components/RemoveModal/RemoveModal";
import SingleCategory from "../../components/SingleCategory/SingleCategory";

// interface AddCategoryProps {
//   onAddCategory?: (categoryName: string) => void;
// }

const Category = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (categoryName.trim() !== "") {
      //   onAddCategory(categoryName);
      setCategoryName("");
    }
  };

  return (
    <div className={styles.container}>
      <Navbar name="Category List" />
      <div className={styles.categoryContainer}>
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.categoryInput}
            type="text"
            value={categoryName}
            onChange={handleInputChange}
            placeholder="Enter category name"
          />
          <button type="submit">Add</button>
        </form>
        <BottomBar />
        <RemoveModal />
      </div>
    </div>
  );
};

export default Category;
