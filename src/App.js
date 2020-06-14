import React from "react";
// import Options from "./Options";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
import Toast from "./Toast";
import "./App.css";

// const store = createStore(combineReducers({ ToastReducer }));

function App() {
  const [isOpen, setToast] = React.useState(false);
  return (
    <>
      <h1>Toast Example</h1>
      <button onClick={() => setToast(true)}>Toast Me</button>
      <img
        src="https://toast.monster/toast.jpg"
        loading="lazy"
        alt="..."
        style={{ maxWidth: "100%" }}
      />
      <Toast
        closeCallback={() => setToast(false)}
        description="Dunc the Lunk, thick as a castle wall. Your action has been completed."
        isOpen={isOpen}
        title="App Notification 🍞"
      />
    </>
  );
}

export default App;
