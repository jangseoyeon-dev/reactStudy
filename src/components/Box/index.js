import React from "react";
import styles from "./Box.module.css";

const Box = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.box}  ${
          props.result === "win"
            ? styles.win
            : props.result === "lose"
            ? styles.lose
            : styles.tie
        }`}
      >
        <h1 className={styles.title}>{props.title}</h1>
        <img
          className={styles.img}
          src={props.choice && props.choice.img}
          alt={props.choice && props.choice.name}
        />
        <h1 className={styles.result}>{props.result || "\u00A0"}</h1>
      </div>
      <p className={styles.score}>SCORE: {props.score}</p>
    </div>
  );
};

export default Box;
