import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>{isOn ? "😁 Smile" : "😭 Cry"}</h2>

      <button onClick={() => setIsOn(!isOn)}>
        Toggle Emotion
      </button>
      <h1>----------------------------------------------------------------------------------------------------------</h1>
    </div>
  );
}

export default Toggle;