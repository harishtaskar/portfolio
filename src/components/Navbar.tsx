import React from "react";
import classes from "./css/navbar.module.css";
import Image from "next/image";
import weblogo from "@/assets/images/weblogo.svg";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes["nav-content"]}>
        <div className={classes["nav-logo"]}>
          <Image
            src={weblogo}
            width={500}
            height={100}
            alt="logo"
            className={classes.logo}
          />
          <span className={classes["nav-title"]}>Harish Taskar</span>
        </div>
        <ul className={classes["nav-links"]}>
          <li className={classes["nav-link"]}>
            <Link href={"/"} className={classes["link"]}>
              Home
            </Link>
          </li>
          <li className={classes["nav-link"]}>
            <Link href={"/"} className={classes["link"]}>
              About
            </Link>
          </li>
          <li className={classes["nav-link"]}>
            <Link href={"/"} className={classes["link"]}>
              Projetcs
            </Link>
          </li>
          <li className={classes["nav-link"]}>
            <Link href={"/"} className={classes["link"]}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
