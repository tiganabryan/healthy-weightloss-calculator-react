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

    const [dietLength, setDietLength] = useState(0)

    const inputs = {
        dietLength: dietLength,
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])

    
  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <Stack spacing={3}>
            <Text>diet length</Text>
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
    </Box>
  )
}

export default Step3