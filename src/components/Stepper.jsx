import React from "react"
import { 
    Flex,
    Heading,
    Button,
    Square,
    Center,
    Grid,
    GridItem,
    Container,
    Box
} from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'



// interface userInput {
//     age: number,
//     height: number,
//     weight: number,
//     activityLevel: number,
//     dietLength: number,
//     bmr: number,
//     tdee: number,
//   }

export const Stepper = ( { userInput}, setAge, setHeight, setWeight, setGender ) => {

    const steps = [
        { label: "step 1", form: <Step1 userInput={userInput} /> }, 
        { label: "step 2", form: <Step2 userInput={userInput} /> }, 
        { label: "step 3", form: <Step3 userInput={userInput} /> }
    ]

    const { age, height, gender, weight, unit, activityLevel, dietLength, bmr, tdee, weightloss } = userInput

  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  userInput.bmr = (gender === 'female') ? 9.99 * weight + (6.25 * height) - (4.92 * age) - 161 : 9.99 * weight + (6.25 * height) - (4.92 * age) + 5

  userInput.tdee = ((Number(bmr) * Number(activityLevel)) * 10).toFixed(1)

  return (
    <React.Fragment>
    <Grid width="100%" pt={6}>
        <GridItem width="100%">
            <Steps onClickStep={(step) => setStep(step)} activeStep={activeStep}>
                {steps.map(({ label, form }, index) => (
                <Step label={label} key={label}>
                    {form}
                    {/* <Contents /> */}
                </Step>
                ))}
            </Steps>
        </GridItem>

        <Center w='100%' h='100%'>
            <GridItem>
                <Square>
                    {activeStep === steps.length ? (
                        <Flex px={4} py={4} width="100%" flexDirection="column">
                        <Heading fontSize="xl" textAlign="center">
                            your bmr is {userInput.bmr}.
                            <br></br>
                            your tdee is {userInput.tdee}.
                            <br></br>
                            you will lose {weightloss}{unit} in {dietLength} days.
                            <br></br>
                        </Heading>
                        <Button mx="auto" mt={6} size="md" onClick={reset}>
                            reset
                        </Button>
                        </Flex>
                    ) : (
                        <Grid p={3}>
                            <Flex width="100%" justify="flex-end" >
                                <Button
                                    isDisabled={activeStep === 0}
                                    mr={4}
                                    onClick={prevStep}
                                    size="md"
                                    variant="ghost"
                                >
                                    prev
                                </Button>

                                <Button size="md" onClick={nextStep}>
                                    {activeStep === steps.length - 1 ? "finish" : "next"}
                                </Button>
                                {/* <p>{age}</p> */}
                            </Flex>
                        </Grid>
                    )}
                </Square>
            </GridItem>
        </Center>
    </Grid>

    
    </React.Fragment>
  )
}