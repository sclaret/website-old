import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={`container vh-100 d-flex align-items-center p-0`}>
      <div className={`row w-100 m-0`}>
        <div className={`col`}></div>
        <div className={`col-auto mb-5`}>
          <p className={`text-center fs-4`}>
            Hi, I'm{" "}
            <a
              href="https://www.linkedin.com/in/simonclaret"
              target="_blank"
              className={`fw-bold`}
            >
              Simon Claret
            </a>
            .
          </p>
          <p className={`text-center fs-4`}>
            I live in Montreal, and work as a software developer.{" "}
          </p>
          <h2 className={`text-center`}>
            <a
              href="https://github.com/sclaret"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-github"></i>
            </a>
            <a
              href="https://gitlab.com/sclaret"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-gitlab"></i>
            </a>
            <a
              href="https://gist.github.com/sclaret"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-sticky-fill"></i>
            </a>
            <a
              href="www_sc.pub"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-key-fill"></i>
            </a>
            <a
              href="https://www.strava.com/athletes/9096850"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-strava"></i>
            </a>
            <a
              href="https://onlinecontest.org/olc-3.0/gliding/flightbook.html?sp=2011&st=olcp&rt=olc&pi=44435"
              target="_blank"
              className={`${styles.iconLink}`}
            >
              <i className="bi-send-fill"></i>
            </a>
          </h2>
        </div>
        <div className={`col`}></div>
      </div>
    </div>
  );
}
