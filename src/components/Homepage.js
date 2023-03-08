import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
};

export default function Homepage() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>New Ride</button>
        <button onClick={() => dispatch({ type: "fuel" })}>Tank Refill</button>
      </div>
    </div>
  );
}
