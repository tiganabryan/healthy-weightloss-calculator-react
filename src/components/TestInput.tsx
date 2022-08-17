import React from 'react'
import { useState, useEffect } from "react";

const TestInput = () => {

    const inputStyle = {
    borderWidth: '2px',
    borderColor: 'lavender',
    borderRadius: '9px',
    padding: '7px',
    marginBottom: '1rem'
    }

    const [age, setAge] = useState(0)

    useEffect(() => {
        setAge(age)
        console.log(inputs)
    }, [age])

    const inputs = [age]

  return (
    <div>
        <input style={inputStyle} type="number" placeholder='age' onChange={(e) => setAge(Number(e.target.value))}  />
    </div>
  )
}

export default TestInput