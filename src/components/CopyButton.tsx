"use client";
import React, { useCallback, useState } from "react";
import classes from "./css/herosection.module.css";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

type Props = {};

const CopyButton = ({}: Props) => {
  const [copy, setCopy] = useState(false);
  const clickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      navigator.clipboard
        .writeText("harishtaskar001@gmail.com")
        .then(() => {
          setCopy(true);
        })
        .catch((error) => {
          toast.error(error);
          setCopy(false);
        });
      setTimeout(() => {
        setCopy(false);
      }, 8 * 1000);
    },
    []
  );
  return (
    <>
      <button className={classes["btn-copy"]} onClick={clickHandler}>
        {copy ? (
          <i
            className={`${classes["copied-icon"]} ri-check-double-fill ri-xl`}
            data-tooltip-content={"copied"}
            data-tooltip-id="my-tooltip"
          />
        ) : (
          <i
            className={`ri-file-copy-line ri-xl`}
            data-tooltip-content={"copy email"}
            data-tooltip-id="my-tooltip"
          />
        )}
      </button>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default CopyButton;
