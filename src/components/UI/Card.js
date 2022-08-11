import React from "react";
import classes from "./Card.module.css";

Card.propTypes = {};

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
