"use client";
import React, { useState } from "react";
import classes from "./css/navbar.module.css";
import Image from "next/image";
import weblogo from "@/assets/images/weblogo.svg";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

type Props = {};

const Navbar = (props: Props) => {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);

  return (
    <>
      {!mobileNavbar && (
        <div className={classes.navbar}>
          <div className={classes["nav-content"]}>
            <div className={classes["nav-logo"]}>
              {/* <Image
                src={weblogo}
                width={500}
                height={100}
                alt="logo"
                className={classes.logo}
              /> */}
              <i className={`${classes['logo']} ri-donut-chart-fill ri-2x`}/>
              <span className={classes["nav-title"]}>harishtaskar.dev</span>
            </div>
            <ul className={classes["nav-links"]}>
              <li className={classes["nav-link"]}>
                <Link href={"#home"} className={classes["link"]}>
                  Home
                </Link>
              </li>
              <li className={classes["nav-link"]}>
                <Link href={"#about"} className={classes["link"]}>
                  About
                </Link>
              </li>
              <li className={classes["nav-link"]}>
                <Link href={"#projects"} className={classes["link"]}>
                  Projects
                </Link>
              </li>
              <li className={classes["nav-link"]}>
                <Link href={"#contact"} className={classes["link"]}>
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className={classes["mobile-nav-btn"]}
              onClick={() => setMobileNavbar((prev) => !prev)}
            >
              <i className="ri-menu-line ri-xl" />
            </button>
          </div>
        </div>
      )}
      {/* //mobile navbar links */}
      {mobileNavbar && (
        <div className={classes["mobile-nav"]}>
          <button
            className={classes["mobile-nav-btn"]}
            onClick={() => setMobileNavbar((prev) => !prev)}
            style={{ position: "absolute", top: 28, right: 24 }}
          >
            <i className="ri-close-large-line ri-xl" />
          </button>
          <ul className={classes["mobile-nav-links"]}>
            <li className={classes["mobile-nav-link"]}>
              <Link
                href={"#home"}
                className={classes["link"]}
                onClick={() => setMobileNavbar((prev) => !prev)}
              >
                Home
              </Link>
            </li>
            <li className={classes["mobile-nav-link"]}>
              <Link
                href={"#about"}
                className={classes["link"]}
                onClick={() => setMobileNavbar((prev) => !prev)}
              >
                About
              </Link>
            </li>
            <li className={classes["mobile-nav-link"]}>
              <Link
                href={"#projects"}
                className={classes["link"]}
                onClick={() => setMobileNavbar((prev) => !prev)}
              >
                Projects
              </Link>
            </li>
            <li className={classes["mobile-nav-link"]}>
              <Link
                href={"#contact"}
                className={classes["link"]}
                onClick={() => setMobileNavbar((prev) => !prev)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className={classes["mobile-nav-bottom"]}>
            <div className={classes["mobile-nav-logo"]}>
              <Image
                src={weblogo}
                width={500}
                height={100}
                alt="logo"
                className={classes.logo}
              />
              <span className={classes["nav-title"]}>Harish Taskar</span>
            </div>
            {/* <ThemeButton /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
