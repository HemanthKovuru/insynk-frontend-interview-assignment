import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Category.module.scss";
import BottomBar from "../../components/BottomBar/BottomBar";
// import RemoveModal from "../../components/RemoveModal/RemoveModal";
import SingleCategory from "../../components/SingleCategory/SingleCategory";
import { ExpenseCategory } from "../../interfaces/global";

// interface AddCategoryProps {
//   onAddCategory?: (categoryName: string) => void;
// }

const Category = () => {
  const cats = JSON.parse(localStorage.getItem("categories") as string);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categories, setCategories] = useState<ExpenseCategory[]>(cats);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (categoryName.trim() !== "") {
      const temp = [...cats, { isMain: false, order: 0, name: categoryName }];
      setCategories(temp);
      console.log("cats", temp);

      localStorage.setItem("categories", JSON.stringify(temp));
      setCategoryName("");
    }
  };

  // delete a category by name
  const deleteCategoryByName = (
    categoryName: string,
    isMain: boolean
  ): void => {
    const cats = JSON.parse(localStorage.getItem("categories") as string);
    const indexToDelete = cats.findIndex(
      (category: ExpenseCategory) => category.name === categoryName
    );

    if (indexToDelete !== -1 && !isMain) {
      cats.splice(indexToDelete, 1);
      setCategories(cats);
      localStorage.setItem("categories", JSON.stringify(cats));
      console.log(`Category "${categoryName}" deleted.`, categories);
    } else {
      console.log(`Category "${categoryName}" not found.`);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar name="Category List" />
      <div className={styles.categoryContainer}>
        {categories.map((category: ExpenseCategory) => (
          <SingleCategory
            key={category.name}
            category={category}
            deleteCategoryByName={deleteCategoryByName}
          />
        ))}

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
        {/* <RemoveModal /> */}
      </div>
    </div>
  );
};

export default Category;
