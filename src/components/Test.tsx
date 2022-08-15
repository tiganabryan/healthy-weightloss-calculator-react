import React, { useEffect, useState } from 'react'

const log = console.log
const Test = () => {
    // let inputs: {
    //     age: number,
    //     height: number,
    //     weight: number
    // }

    let standardInputs = [
      // {age: 20},
      // {height: 155},
      // {weight: 105}
    ]

    // let standardInputs: { age: number, height: number, weight: number }[] = [
    //   { age: 0 },
    //   { height: 1 },
    //   { weight: 2 }
    // ];

    // let standardInputs: Array<{ age: number, height: string }> = []

    standardInputs.push({age: 20})
    log(standardInputs)
  

    // standardInputs[0] = 21


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

  const [age, setAge] = useState('')

  return (
    <div>
        <label>test</label>
        <input type="text" value={age} placeholder='test' onChange={(e) => {
            setAge(e.target.value)
            setInputs(inputs.push(age))
            console.log(setInputs)
            }} />
          <p>{age}</p>
    </div>
  )
}

export default Test