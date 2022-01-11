import { MovieStars } from "..";

import styles from "./styles.module.scss";

const MovieScore = () => {
  const score = 4;
  const count = 13;

  return (
    <div className={styles.dsmovieScoreContainer}>
      <p className={styles.dsmovieScoreValue}>
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className={styles.dsmovieScoreCount}>{count} avaliações</p>
    </div>
  );
};

export default MovieScore;
