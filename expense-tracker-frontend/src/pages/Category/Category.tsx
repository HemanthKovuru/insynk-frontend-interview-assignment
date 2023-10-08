import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Category.module.scss";
import BottomBar from "../../components/BottomBar/BottomBar";
import SingleCategory from "../../components/SingleCategory/SingleCategory";
import { ExpenseCategory } from "../../interfaces/global";

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
      const temp = [
        ...cats,
        { isMain: false, order: categories.length + 1, name: categoryName },
      ];
      setCategories(temp);

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

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, newIndex: number) => {
    e.preventDefault();
    const oldIndex = parseInt(e.dataTransfer.getData("index"));
    const updatedCategories = [...categories];
    const [draggedCategory] = updatedCategories.splice(oldIndex, 1);
    updatedCategories.splice(newIndex, 0, draggedCategory);
    setCategories(updatedCategories);

    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  return (
    <div className={styles.container}>
      <Navbar name="Category List" />
      <div className={styles.categoryContainer}>
        {categories.map((category: ExpenseCategory, index: number) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <SingleCategory
              category={category}
              deleteCategoryByName={deleteCategoryByName}
            />
          </div>
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
      </div>
    </div>
  );
};

export default Category;
