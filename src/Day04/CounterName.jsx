import React, { useState } from "react";

const CounterName = () => {
  const names = [
    "Rohit Sharma",
    "Shikhar Dhawan",
    "Virat Kohli",
    "KL Rahul",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Ms Dhoni",
    "Jasprit Bumrah",
    "Mohammed Shami",
    "Bhuvneshwar Kumar",
    "Mohammed Siraj",
  ];

  const [index, setIndex] = useState(0);

  const changeName = () => {
    setIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  return (
    <div>
      <h2>Your Fav Cricketer: {names[index]}</h2>

      <button onClick={changeName}>
        Change the Cricketer Name
      </button>
      <h1>----------------------------------------------------------------------------------------------------------</h1>
    </div>
  );
};

export default CounterName;