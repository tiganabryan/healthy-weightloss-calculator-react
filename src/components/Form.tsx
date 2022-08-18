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
import { useState, useEffect } from 'react';
  
  
  
  export default function Form() {

  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('female')
  const [activityLevel, setActivityLevel] = useState(0)
  const [dietLength, setDietLength] = useState(0)
  const [bmrCalculation, setBmrCalculation] = useState(0)
  const [tdeeCalculation, setTdeeCalculation] = useState(0)

  let inputs: {
    age: number, 
    height: number, 
    weight: number, 
    gender: string,
    activityLevel: number,
    dietLength: number,
    bmrCalculation: number,
    tdeeCalculation: number,
  }

  inputs = {
    age: age, 
    height: height, 
    weight: weight, 
    gender: gender,
    activityLevel: activityLevel,
    dietLength: dietLength,
    bmrCalculation: bmrCalculation,
    tdeeCalculation: tdeeCalculation,
  }

    // const [userInput, setUserInput] = useState({
    //   age: 0,
    //   height: 0,
    //   weight: 0,
    //   activityLevel: 0,
    //   dietLength: 0,
    //   bmr: 0,
    //   tdee: 0,
    // })

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
        // userInput={userInput} 
        // setUserInput={setUserInput}
         />
    </React.Fragment>
    );
  }