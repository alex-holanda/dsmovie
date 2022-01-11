import { ReactComponent as StarFull } from "assets/star-full.svg";
import { ReactComponent as StarHalf } from "assets/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/star-empty.svg";

import styles from "./styles.module.scss";

const MovieStars = () => {
  return (
    <div className={styles.dsmovieStarsContainer}>
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
      <StarEmpty />
    </div>
  );
};

export default MovieStars;
