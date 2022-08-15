import React from 'react'
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
  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input placeholder='age' size='lg' />
            <Input placeholder='height' size='lg' />
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