import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CricketersGET = () => {
  const [cricketer1, setCricketer1] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/cricketers')
      .then((res) => {
        setCricketer1(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Cricketers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        cricketer1.map((cri) => (
          <div key={cri.jerseyNo}>
            <h1>Jersey No : {cri.jerseyNo}</h1>
            <h1>Name : {cri.name}</h1>
            <h1>Age : {cri.age}</h1>
            <h1>Best Score : {cri.bestScore}</h1>
          </div>
        ))
      )}
    </div>
  )
}

export default CricketersGET