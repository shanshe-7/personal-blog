import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          const tempLink = document.createElement("a");
          tempLink.style.display = "none";
          tempLink.href = "/api/resume";
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        }}
      >
        download resume
      </button>
    </div>
  );
};

export default Home;
