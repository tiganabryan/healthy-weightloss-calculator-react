import React from 'react'

import { Stepper } from './Stepper';

import { useState } from 'react';
  
  
  
  export default function Form() {

    const [userInput, setUserInput] = useState({
      age: 0,
      height: 0,
      gender: 0,
      weight: 0,
      unit: 'kg',
      activityLevel: 0,
      dietLength: 0,
      bmr: 0,
      tdee: 0,
      weightloss: 0
    })

    return (
    <React.Fragment>
        <Stepper 
        userInput={userInput}
         />
    </React.Fragment>
    );
  }