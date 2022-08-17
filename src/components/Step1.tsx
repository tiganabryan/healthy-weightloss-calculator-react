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
  const [gender, setGender] = useState(0)

  const inputs = {
      age: age,
      height: height,
      weight: weight,
      gender: gender
  }


  useEffect(() => {
      console.log(inputs)
      console.log(inputs.age + inputs.height)
  }, [inputs])

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input type="number" placeholder='age' size='lg' />
            <Input type="number" placeholder='height' size='lg' />
            <Input type="number" placeholder='weight' size='lg' />

            <Select placeholder='gender' size='lg'>
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