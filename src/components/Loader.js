import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
// import logo from "../logo.svg";

export const Loader = props => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress === true ? <div>Loading...</div> : null;
};

export default Loader;
