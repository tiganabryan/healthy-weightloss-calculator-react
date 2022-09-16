import React from 'react'
import { useState, useEffect } from 'react'
import { 
    Flex,
    Heading,
    Button,
    Square,
    Center,
    Grid,
    GridItem,
    Container,
    Box,
    Input,
    Stack,
    Select
} from "@chakra-ui/react"
import Form from './Form'




const Step1 = () => {

  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('female')

  const inputs = {
      age: age,
      height: height,
      weight: weight,
      gender: gender
  }


  useEffect(() => {
      console.log(inputs)
  }, [inputs])

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input type="number" placeholder='age' onChange={(e) => setAge(Number(e.target.value))} size='lg' />
            <Input type="number" placeholder='height' onChange={(e) => setHeight(Number(e.target.value))} size='lg' />
            <Input type="number" placeholder='weight' onChange={(e) => setWeight(Number(e.target.value))} size='lg' />

            <Select placeholder='gender' onChange={(e) => setGender(e.target.value)} size='lg'>
                <option value='male'>male</option>
                <option value='female'>female</option>
                <option value='other'>other</option>
            </Select>
        </Stack>
        </form>
    </Box>
  )
}

export default Step1