"use client";
import React, { useEffect, useState } from "react";
import classes from "./css/navbar.module.css";

type Props = {};

const ThemeButton = ({}: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const headTag = document.getElementsByTagName("head")[0];
    if (theme === "light") {
      const styleTag = document.createElement("style");
      styleTag.id = "styleID";

      styleTag.innerHTML = `
      :root body{
        --background: #f8f8f8;
        --secondary: #484848f3;
        --text-color: #0e0e0ef3;
        --text-color-2: #212121f3;
        --white: black;
        --black: white;
        --navbar: #ffffffdf;
        --mobile-nav-background: #f8f8f8f0;
      }`;
      headTag.appendChild(styleTag);
    } else {
      const styleTag = document.getElementById("styleID");
      if (styleTag) {
        headTag.removeChild(styleTag);
      }
    }
  }, [theme]);

  return (
    <>
      <button
        className={classes["btn-theme"]}
        onClick={() =>
          setTheme((prev: any) => {
            return prev === "light" ? "dark" : "light";
          })
        }
      >
        {theme === "dark" ? (
          <i className="ri-sun-line ri-2x" />
        ) : (
          <i className="ri-moon-fill ri-2x" />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
