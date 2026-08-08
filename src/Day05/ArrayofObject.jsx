import React from 'react'

const ArrayOfObject = () => {
  const players = [
    {
      jerseyNo: 45,
      name: "🧢 Vice-Captain Rohit Sharma",
      age: 30,
      bestScore: 264
    },
    {
      jerseyNo: 27,
      name: "Ajinkya Rahane",
      age: 29,
      bestScore: 111
    },
    {
      jerseyNo: 18,
      name: "🧢 Captain Virat Kohli",
      age: 28,
      bestScore: 183
    },
    {
      jerseyNo: 9,
      name: "Manish Pandey",
      age: 28,
      bestScore: 104
    },
    {
      jerseyNo: 81,
      name: "Kedar Jadhav",
      age: 32,
      bestScore: 120
    },
    {
      jerseyNo: 7,
      name: "MS Dhoni",
      age: 36,
      bestScore: 183
    },
    {
      jerseyNo: 33,
      name: "Hardik Pandya",
      age: 24,
      bestScore: 92
    },
    {
      jerseyNo: 15,
      name: "Bhuvneshwar Kumar",
      age: 27,
      bestScore: 53
    },
    {
      jerseyNo: 23,
      name: "Kuldeep Yadav",
      age: 22,
      bestScore: 19
    },
    {
      jerseyNo: 3,
      name: "Yuzvendra Chahal",
      age: 27,
      bestScore: 18
    },
    {
      jerseyNo: 93,
      name: "Jasprit Bumrah",
      age: 23,
      bestScore: 16
    }
  ]

  return (
    <div>
      <h1>Cricketer's Info :</h1>
      {players.map((e) => (
        <div
          key={e.jerseyNo}
          style={{ marginBottom: '20px', borderBottom: '1px solid #3cb9fc', paddingBottom: '10px' }}
        >
          <h1>Jersey No : {e.jerseyNo}</h1>
          <h1>Name : {e.name}</h1>
          <h1>Age : {e.age}</h1>
          <h1>Best Score : {e.bestScore}</h1>
        </div>
      ))}
    </div>
  )
}

export default ArrayOfObject