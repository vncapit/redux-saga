import { incrementAction, decrementAction } from "../redux/actions/counterAction";
import { useSelector, useDispatch } from "react-redux";

export const ActionComponent = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <label>Increase 3: </label>
        <button onClick={() => dispatch(incrementAction(3))}>Do Increase</button>
      </div>
      <div>
        <label>Decrease 2: </label>
        <button onClick={() => dispatch(decrementAction(2))}>Do Decrease</button>
      </div>
    </div>
  );
};
