import { useState } from 'react'
import { 
    Box,
    Input,
    Stack,
    Select
} from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux'
import { updateInput } from '../store/userInputSlice'




const Step1 = ( { userInput } ) => {

  const age = useSelector((state) => state.updateInput.age)
  const dispatch = useDispatch()

  const [ageInput, setAgeInput] = useState(0)
  const [heightInput, setHeightInput] = useState(0)
  const [weightInput, setWeightInput] = useState(0)
  const [genderInput, setGenderInput] = useState('female')

  userInput.age = ageInput
  userInput.height = heightInput
  userInput.weight = weightInput
  userInput.gender = genderInput

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input type="number" placeholder='age' 
            onChange={() => {
              dispatch(updateInput())
              console.log(age)
            }} 
            size='lg' />
            <Input type="number" placeholder='height (cm)' onChange={(e) => setHeightInput(Number(e.target.value))} size='lg' />
            <Input type="number" placeholder='weight (kg)' onChange={(e) => setWeightInput(Number(e.target.value))} size='lg' />

            <Select placeholder='gender' onChange={(e) => setGenderInput(e.target.value)} size='lg'>
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