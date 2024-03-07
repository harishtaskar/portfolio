import React from "react";
import Heading from "./Heading";
import classes from "./css/aboutme.module.css";

type Props = {};

const AboutMe = ({}: Props) => {
  return (
    <section>
      <div className={classes.heading}>
        <i className="ri-arrow-down-line" />
        <Heading text={"About Me"} />
      </div>
    </section>
  );
};

export default AboutMe;
