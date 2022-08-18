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

  const [bmr, setBmr] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [weightloss, setWeightloss] = useState(0)

  const inputs = {
    ageInput: age, 
    heightInput: height, 
    weightInput: weight, 
    genderInput: gender,
    activityLevelInput: activityLevel,
    dietLengthInput: dietLength
  }

  type inputs = {
    ageInput: number, 
    heightInput: number, 
    weightInput: number, 
    genderInput: string,
    activityLevelInput: number,
    dietLengthInput: number,
  }

  

  const { ageInput, heightInput, weightInput, genderInput, activityLevelInput, dietLengthInput } = inputs


  

  const calculations = {
    bmrCalculation: bmr,
    tdeeCalculation: tdee,
    weightlossCalculation: weightloss
  }

  type calculations = {
    bmrCalculation: number,
    tdeeCalculation: number,
    weightlossCalculation: number,
  }
  

  const { bmrCalculation, tdeeCalculation, weightlossCalculation } = calculations


  const bmrFormula = (weight: number, height: number, age: number) => {
    return (((9.99 * weight + 6.25 * height) - (4.92 * age)) - 161)
  }

  const tdeeFormula = (bmr: number, activityLevel: number): number => {
    return (bmr * activityLevel)
  }

  let userBmr = bmrFormula(weight, height, age)
  let userTdee = tdeeFormula(userBmr, activityLevel)

  useEffect(() => {
    setBmr(userBmr)
    console.log(bmr)
  }, [weight, height, age])

    return (
    <React.Fragment>
        <Stepper 
        weightlossCalculation={weightlossCalculation}
        unit='kg' 
        dietLengthInput={dietLengthInput}
        inputs={inputs}
        setAge={setAge}
        setHeight={setHeight}
        setWeight={setWeight}
        setGender={setGender} 
        // userInput={userInput} 
        // setUserInput={setUserInput}
          />
    </React.Fragment>
    );
}