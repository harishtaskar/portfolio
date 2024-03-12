import React from "react";
import classes from "./css/style.module.css";
import Link from "next/link";

type Props = {};

const Credits = ({}: Props) => {
  return (
    <section className={classes.credits}>
      <span className={classes.text}>
        Made by{" "}
        <Link href={"/"} className={classes.name}>
          Harish Taskar
        </Link>{" "}
        - Copyright 2024
      </span>
      {/* <span className={classes.text}>
        Design by{" "}
        <Link href={"/"} className={classes.name}>
          Viraj Aher
        </Link>
      </span> */}
    </section>
  );
};

export default Credits;
