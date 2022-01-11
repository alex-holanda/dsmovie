import { Link } from "react-router-dom";

import { MovieScore } from "app/components";

import styles from "./styles.module.scss";

const MovieCard = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div>
      <img
        src={movie.image}
        alt={movie.title}
        className={styles.dsmovieMovieCardImage}
      />

      <div className={styles.dsmovieCardBottomContainer}>
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`}>
          <div className={`btn btn-primary ${styles.dsmovieBtn}`}>Avaliar</div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
