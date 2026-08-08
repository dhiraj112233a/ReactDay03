import React from "react";

function App() {
  let isLoggedIn = true;

  return (
    <div>
      <h1>
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h1>
    </div>
  );
}

export default App;