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

    // const [age, setAge] = useState(0)
    // const [height, setHeight] = useState(0)
    // const [weight, setWeight] = useState(0)
    // const [gender, setGender] = useState('female')
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

    // interface userInput {
    //   age: number,
    //   height: number,
    //   weight: number,
    //   activityLevel: number,
    //   dietLength: number,
    //   bmr: number,
    //   tdee: number,
    // }

    

    return (
    <React.Fragment>
        <Stepper 
        // weightloss={3} unit='kg' 
        // dietLength={10} 
        userInput={userInput} 
        // setAge={setAge}
        // setWeight={setWeight}
        // setHeight={setHeight}
        // setGender={setGender}
        // setUserInput={setUserInput}
         />
    </React.Fragment>
    );
  }