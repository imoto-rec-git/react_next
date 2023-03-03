import React from "react";
import classes from "./CssModules.module.css";

export const CssModules = () => {
  console.log({ ...classes });

  return (
    <>
      <h1 className={classes.title}>CSS Modules</h1>
      <p id={classes.ptag}>シーエスエスモジュールズ</p>
    </>
  );
};
