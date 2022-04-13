import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions/counterActions";
import logo from "./reduxLogo.svg";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1
            className="counter-number"
            style={{
              color: counter > 0 ? "green" : counter === 0 ? "white" : "red",
            }}
          >
            {counter}
          </h1>
          <button
            className="decrease"
            onClick={() => dispatch(actions.decrease())}
          >
            Decrease
          </button>
          <button className="reset" onClick={() => dispatch(actions.reset())}>
            Reset
          </button>
          <button
            className="increase"
            onClick={() => dispatch(actions.increase())}
          >
            Increase
          </button>
        </div>
      </header>
    </div>
  );
}
