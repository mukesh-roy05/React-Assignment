import React, { useReducer } from "react";

const initialState = {
  count: 0,
  clicks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        clicks: [...state.clicks, "I"],
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
        clicks: [...state.clicks, "D"],
      };

    case "RESET":
      return {
        count: 0,
        clicks: [...state.clicks, "R"],
      };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <h2>History : {state.clicks.join(",")}</h2>
    </div>
  );
};

export default App;
