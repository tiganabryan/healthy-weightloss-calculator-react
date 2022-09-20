import React from 'react'

import {
    Box,
    Square,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Center
  } from '@chakra-ui/react';
import { Stepper } from './Stepper';
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

import { useState } from 'react';
  
  
  
  export default function Form() {

    // const [unit, setUnit] = useState(0)
    // const [activityLevel, setActivityLevel] = useState(0)
    // const [dietLength, setDietLength] = useState(0)
    // const [bmr, setBmr] = useState(0)
    // const [tdee, setTdee] = useState(0)
    // const [weightloss, setWeightloss] = useState(0)


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

    let { age, height, gender, weight, unit, activityLevel, dietLength, bmr, tdee, weightloss } = userInput

    
    // where I was: where do I want to perform the calculations? and will I have to pass props up from step1 to the stepper to display the values?
    // and then I just have to repeat updating the object in step2 and 3 .jsx
    // and then I think it will be done!

    return (
    <React.Fragment>
        <Stepper 
        userInput={userInput}
         />
    </React.Fragment>
    );
  }