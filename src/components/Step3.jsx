import { useState } from 'react'
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

    userInput.dietLength = dietLength


    const dietLengthArray = Array.from({length: dietLength}, (_, i) => i + 1)

    const deficitValues = dietLengthArray.map((day) => userInput.tdee - day)
    const totalDeficit = deficitValues.reduce((previous, current) => previous + current, deficitValues[0])
    userInput.weightloss = (totalDeficit / 7716.1805).toFixed(2)



  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <Stack spacing={3} textAlign='start'>
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
                    }} size='lg' />
                )
                }) 
            }

        </div>

        {!dietLength && <Text padding='1rem 0rem' marginTop='-1rem' textAlign='start'>at least one day must be given for the calculator to work.</Text>}

    </Box>
  )
}

export default Step3