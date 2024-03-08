import React from "react";
import classes from "./css/style.module.css";
import Link from "next/link";

type Props = {
  text: string;
  id?: string;
};

const Heading = ({ text, id }: Props) => {
  return (
    <Link href={`#${id}`} className={classes["main-heading"]}>
      {text}
    </Link>
  );
};

export default Heading;
