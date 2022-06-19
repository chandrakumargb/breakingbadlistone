import React from "react";
import styles from "./card.module.css";
const Card = (props) => {
  console.log("props", props);
  return (
    <>
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.card}>  
          <img src={props.img} alt="" width={250} height={250}></img>
          <h3> Name:{props.name}</h3>
          <p key={props.char_id}></p>
          <p>Date Of Birth: {props.birthday}</p>
          <p> Nickname :{props.nickname}</p>
          <p>Occupation:{props.occupation}</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default Card;