import { useSelector } from "react-redux";

export const DisplayComponent = () => {
  const counter = useSelector((state) => state.counterReducer.counter);

  return <div>Counter: {counter}</div>;
};
