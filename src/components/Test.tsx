import React, { useEffect, useState } from 'react'

const log = console.log
const Test = () => {
    // let inputs: {
    //     age: number,
    //     height: number,
    //     weight: number
    // }

    // inputs = {
    //     age: 20,
    //     height: 155,
    //     weight: 105
    // }

    const [age, setAge] = useState('')

    // let [inputs, setInputs]: {
    //         age: number,
    //         height: number,
    //         weight: number
    //     }
    const [inputs, setInputs] = useState<any>([
    // {age: 0},
    // {height: 0},
    // {weight: 0}
  ]);

  return (
    <div>
        <label>test</label>
        <input type="text" value={age} placeholder='test' onChange={(e) => {
            setAge(e.target.value)
            setInputs(inputs.push(age))
            console.log(setInputs)
            }} />
    </div>
  )
}

export default Test