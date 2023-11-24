import React from "react";
import styles from "@/styles/ContentStyles.module.css";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Im Eihab Khan</h1>
        <p>
          A front-end engineer and UI/UX designer helping startups turn their
          visions into a digital reality. I specialize in designing and building
          modern mobile and web-based apps.
        </p>
        <button>See my resume</button>
        <button>Get in touch</button>
      </div>
    </div>
  );
}

export default Content;
