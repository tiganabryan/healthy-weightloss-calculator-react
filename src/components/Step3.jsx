import React, { useState, useEffect } from 'react'
import { 
    Text,
    Box,
    Input,
    Stack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
} from "@chakra-ui/react"
import Form from './Form'

const Step3 = ({userInput}) => {

    const gridStyle = {
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fill, minmax(103px, 1fr))',
        gap: '.8rem',
    }

    const intakeInputStyle = {
        
        display: 'grid',
        width: '6rem',
        marginBottom: '1rem',
        background: '#fffafc'
        
    }

    const [dietLength, setDietLength] = useState(0)
    const [intake, setIntake] = useState(0)

    const inputs = {
        dietLength: dietLength,
    }

    userInput.dietLength = dietLength


    const [caloriesArray, setCaloriesArray] = useState([0])
    const dietLengthArray = Array.from({length: dietLength}, (_, i) => i + 1)


    useEffect(() => {
        console.log(`array of diet days: ${dietLengthArray}`)
    }, [dietLengthArray])

    

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <label>diet length (days)</label>
                <Stack spacing={5} >
                    <NumberInput size='lg' maxW={32} min={1} max={31} marginBottom='1rem' 
                    onChange={(e) => setDietLength(Number(e))}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
        </Stack>

        <div style={gridStyle} >

            {dietLength > 0 && 
            
            dietLengthArray.map((day) => {
                return (
                    <Input key={day} type="number" placeholder={`day ${day}`} style={intakeInputStyle}  
                    onChange={(e) => {
                        dietLengthArray[day-1] = Number(e.target.value)
                        console.log(dietLengthArray)
                        // console.log(day.key)
                        // dietLength[day] = Number(e.target.value)
                        // setCaloriesArray([...caloriesArray, Number(e.target.value)])
                    }} size='lg' />
                )
                }) 
            }

        </div>

        {!dietLength && <Text padding='1rem 0rem' marginTop='-1rem'>at least one day must be given for the calculator to work.</Text>}


        {/* <input type="submit" value='calories array' /> */}
        </form>
    </Box>
  )
}

export default Step3