import styles from "./SingleCategory.module.scss";

const SingleCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>Entertainment</div>
      <button className={styles.remove}>X</button>
    </div>
  );
};

export default SingleCategory;
