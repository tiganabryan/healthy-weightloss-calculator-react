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
    Radio
} from "@chakra-ui/react"
import Form from './Form'

const Step2 = () => {
    const [value, setValue] = useState('1')

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Text>next, how active are you?</Text>
            <RadioGroup onChange={setValue} value={value}>
                <Stack spacing={5}>

                    <Radio value='1'>
                    sedentary
                    </Radio>

                    <Radio value='2'>
                    light
                    </Radio>

                    <Radio value='3'>
                    active
                    </Radio>

                </Stack>
            </RadioGroup>

        </Stack>
        </form>
    </Box>
  )
}

export default Step2