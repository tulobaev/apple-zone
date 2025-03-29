import React from "react";
import scss from "./Loader.module.scss";

const Loader = () => {
  return (
    <div>
      <div className={scss.loader}></div>
    </div>
  );
};

export default Loader;
