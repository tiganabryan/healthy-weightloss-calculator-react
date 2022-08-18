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

  const [bmr, setBmrCalculation] = useState(0)
  const [tdee, setTdeeCalculation] = useState(0)
  const [weightloss, setWeightloss] = useState(0)

  let inputs: {
    ageInput: number, 
    heightInput: number, 
    weightInput: number, 
    genderInput: string,
    activityLevelInput: number,
    dietLengthInput: number,
  }

  inputs = {
    ageInput: age, 
    heightInput: height, 
    weightInput: weight, 
    genderInput: gender,
    activityLevelInput: activityLevel,
    dietLengthInput: dietLength
  }

  const { ageInput, heightInput, weightInput, genderInput, activityLevelInput, dietLengthInput } = inputs

  let calculations: {
    bmrCalculation: number,
    tdeeCalculation: number,
    weightlossCalculation: number
  }

  calculations = {
    bmrCalculation: bmr,
    tdeeCalculation: tdee,
    weightlossCalculation: weightloss
  }

  const { bmrCalculation, tdeeCalculation, weightlossCalculation } = calculations


    return (
    <React.Fragment>
        <Stepper 
        weightlossCalculation={weightlossCalculation} unit='kg' 
        dietLengthInput={dietLengthInput} 
        // userInput={userInput} 
        // setUserInput={setUserInput}
         />
    </React.Fragment>
    );
  }