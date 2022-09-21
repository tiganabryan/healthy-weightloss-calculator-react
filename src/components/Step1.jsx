import { useState, useEffect } from 'react'
import { 
    Box,
    Input,
    Stack,
    Select
} from "@chakra-ui/react"




const Step1 = ( { userInput } ) => {

   let { weight, age, height, gender } = userInput

  const [ageInput, setAgeInput] = useState(0)
  const [heightInput, setHeightInput] = useState(0)
  const [weightInput, setWeightInput] = useState(0)
  const [genderInput, setGenderInput] = useState('female')

  userInput.age = ageInput
  userInput.height = heightInput
  userInput.weight = weightInput
  userInput.gender = genderInput

  const inputs = {
      age: age,
      height: height,
      weight: weight,
      gender: gender
  }


  useEffect(() => {
      console.log(userInput)
  }, [inputs])

  return (
    <Box w='100%' p={4} mt={4} borderRadius={12} borderColor='navy' borderWidth={1}>
        <form>
        <Stack spacing={3}>
            <Input type="number" placeholder='age' onChange={(e) => setAgeInput(Number(e.target.value))} size='lg' />
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