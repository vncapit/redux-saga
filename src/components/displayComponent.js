import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

export const DisplayComponent = (props) => {
  const localCounter = props.localCounter;
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <Fragment>
      <div>Counter Redux State: {counter}</div>
      <div>Own state: {localCounter} </div>
    </Fragment>
  );
};
