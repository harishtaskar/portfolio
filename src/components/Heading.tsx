import React from "react";
import classes from "./css/style.module.css";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return <div className={classes["main-heading"]}>{text}</div>;
};

export default Heading;
