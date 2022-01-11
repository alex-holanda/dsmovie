import styles from '../styles/Form.module.scss';

const FormView = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <>
      <div className={styles.dsmovieFormContainer}>
        <img
          src={movie.image}
          alt={movie.title}
          className={styles.dsmovieMovieCardImage}
        />
        <div className={styles.dsmovieCardBottomContainer}>
          <h3>{movie.title}</h3>

          <form className={styles.dsmovieForm}>
            <div className={`form-group ${styles.dsmovieFormGroup}`}>
              <label htmlFor="email">Informe seu e-mail</label>
              <input type="email" id="email" className="form-control" />
            </div>

            <div className={`form-group ${styles.dsmovieFormGroup}`}>
              <label htmlFor="score">Informe sua avaliação</label>
              <select name="score" id="score" className="form-control">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className={styles.dsmovieFormBtnContainer}>
              <button type="submit" className={`btn btn-primary ${styles.dsmovieBtn}`}>
                Salvar
              </button>
            </div>
          </form>

          <button className={`btn btn-primary mt-3 ${styles.dsmovieBtn}`}>Cancelar</button>
        </div>
      </div>
    </>
  );
};

export default FormView;
