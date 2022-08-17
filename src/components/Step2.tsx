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
    Radio
} from "@chakra-ui/react"
import Form from './Form'

const Step2 = () => {

    const [activityLevel, setActivityLevel] = useState('')

    const inputs = {
        activityLevel: activityLevel,
    }

    useEffect(() => {
        console.log(inputs)
    }, [inputs])


  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Text>next, how active are you?</Text>
            <RadioGroup onChange={(e) => setActivityLevel(e)}>
                <Stack spacing={5}>

                    <Radio value='1.1'>
                    less than once a week
                    </Radio>

                    <Radio value='1.1275'>
                    1-3 times a week
                    </Radio>

                    <Radio value='1.35'>
                    3-5 times a week
                    </Radio>

                    <Radio value='1.525'>
                    daily
                    </Radio>

                </Stack>
            </RadioGroup>

        </Stack>
        </form>
    </Box>
  )
}

export default Step2