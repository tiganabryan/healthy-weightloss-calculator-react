import React, { useState, useEffect } from 'react'
import { 
    Flex,
    Heading,
    Button,
    Square,
    Center,
    Grid,
    GridItem,
    Container,
    Text,
    Box,
    Input,
    Select,
    RadioGroup,
    Stack,
    Radio,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper
} from "@chakra-ui/react"
import Form from './Form'
import DatePicker from 'react-date-picker'

const Step3 = () => {

    const intakeInputStyle = {
        margin: '1rem 0rem'
    }

    const [dietLength, setDietLength] = useState(0)
    const [intake, setIntake] = useState(0)

    const inputs = {
        dietLength: dietLength,
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])


    useEffect(() => {
        console.log(dietLength)
        console.log(dietLengthArray)
    }, [dietLength])
    
    const dietLengthArray = Array.from({length: dietLength}, (_, i) => i + 1)

    
  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <Stack spacing={3}>
            <label>diet length</label>
                <Stack spacing={5}>
                    <NumberInput size='lg' maxW={32} min={1} onChange={(e) => setDietLength(Number(e))}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
        </Stack>
        <div>
            {dietLengthArray.map((day) => {
                return (
                    <Input key={day} type="number" placeholder={`day ${day}`} style={intakeInputStyle}  
                    onChange={(e) => setIntake(Number(e))} size='lg' />
                )
            })}
        </div>
    </Box>
  )
}

export default Step3