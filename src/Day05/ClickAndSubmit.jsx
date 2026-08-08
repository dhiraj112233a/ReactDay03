import React from "react";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }
  return (
    <div>
      <h1>React Events</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;