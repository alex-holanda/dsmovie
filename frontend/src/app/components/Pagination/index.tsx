import { ReactComponent as Arrow } from "assets/arrow.svg";

import styles from "./styles.module.scss";

const Pagination = () => {
  return (
    <div className={styles.dsmoviePaginationContainer}>
      <div className={styles.dsmoviePaginationBox}>
        <button className={styles.dsmoviePaginationButton} disabled={true}>
          <Arrow />
        </button>

        <p>{`${1} de ${3}`}</p>

        <button className={styles.dsmoviePaginationButton} disabled={false}>
          <Arrow className={styles.dsmovieFlipHorizontal} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
