import React from "react";
import styles from "./Box.module.css";

const Box = (props) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{props.title}</h1>
      <img
        className={styles.img}
        src={props.choice && props.choice.img}
        alt={props.choice && props.choice.name}
        width={"300px"}
        height={"300px"}
      />
    </div>
  );
};

export default Box;
