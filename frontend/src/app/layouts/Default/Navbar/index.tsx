import { ReactComponent as GithubIcon } from "assets/github-logo.svg";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={styles.dsmovieNavContent}>
          <h1>DSMovie</h1>
          <a
            href="https://github.com/devsuperior"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.dsmovieContactContainer}>
              <GithubIcon />
              <p className={styles.dsmovieContactLink}>/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
