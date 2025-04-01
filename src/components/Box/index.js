import React from "react";
import styles from "./Box.module.css";

const Box = (props) => {
  return (
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
        width={"300px"}
        height={"300px"}
      />
      <h1 className={styles.result}>{props.result}</h1>
    </div>
  );
};

export default Box;
