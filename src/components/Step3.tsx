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

    const [numberCalories, setnumberCalories] = useState([2000, 1500])

    // const onSubmit = ({ event }: {event : string}) => {
    //     event.preventDefault()

    //     if(!numberCalories) {
    //         alert('add at least one day, love.')
    //         return
    //     }

    //     // onAdd({ numberCalories })

    //     const newIntake = 1300

    //     setnumberCalories([...numberCalories, newIntake])
    // }
  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Text>diet length</Text>
                <Stack spacing={5}>

                    <form 
                    // onSubmit={onSubmit} // pass onSubmit as prop
                    >
                    <NumberInput size='lg' maxW={32} defaultValue={10} min={1}
                    //  onChange={(event) => setnumberCalories(event.target.value)}
                     >
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    </form>
                    
                </Stack>

        </Stack>
        </form>
    </Box>
  )
}

export default Step3