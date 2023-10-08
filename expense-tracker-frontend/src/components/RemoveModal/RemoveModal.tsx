import styles from "./RemoveModal.module.scss";

const RemoveModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <ul>
          <li>Travelling will be removed</li>
          <li>All expense with this category will alos removed</li>
        </ul>
        <div>Do you really want to remove?</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.navBtns}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.confirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
