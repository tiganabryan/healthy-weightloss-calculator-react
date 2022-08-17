import React from 'react'
import { useState, useEffect } from "react";

const TestInput = () => {

    const inputStyle = {
    borderWidth: '2px',
    borderColor: 'lavender',
    borderRadius: '9px',
    padding: '7px',
    marginBottom: '1rem',
    display: 'block'
    }

    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)

    const inputs = {
        age: age,
        height: height
    }


    useEffect(() => {
        console.log(inputs)
        console.log(inputs.age + inputs.height)
    }, [inputs])


  return (
    <div>
        <input style={inputStyle} type="number" placeholder='age' onChange={(e) => setAge(Number(e.target.value))}  />
        <input style={inputStyle} type="number" placeholder='height(cm)' onChange={(e) => setHeight(Number(e.target.value))}  />
    </div>
  )
}

export default TestInput