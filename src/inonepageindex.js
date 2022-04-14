import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";


export const increase = () => {
  return {
    type: INCREASE_COUNTER
  };
};

export const decrease = () => {
  return {
    type: DECREASE_COUNTER
  };
};

export const reset = () => {
  return {
    type: RESET_COUNTER
  };
};


export const counterStates = {
    counter: 0
  };
  
const counterReducer = (state = counterStates, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case RESET_COUNTER:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};


const myStore = () => {
  const store = createStore(counterReducer);
  return store;
};


const store = myStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
