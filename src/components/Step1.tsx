import React, { useState } from 'react'
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

  // let 
  let standardInputs: object[] = []

  // standardInputs

  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)

  // const handleInput = (inputState: any) => {
  //   standardInputs.push({inputState})
  //   console.log(standardInputs)
  // }

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input placeholder='age' size='lg' value={age} onChange={
              (e) => {
                setAge(Number(e.target.value))
                standardInputs.push({age})
                console.log(standardInputs)
                // console.log(e.target)
            }} />
            <Input placeholder='height' size='lg'  />
            
            <Input placeholder='weight' size='lg' />

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