import React from "react"
import { 
    Flex,
    Heading,
    Button,
    Square,
    Center,
    Grid,
    GridItem,
} from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


export const Stepper = ( { userInput} ) => {

    const { age, height, gender, weight, unit, activityLevel, bmr, weightloss } = userInput

    const steps = [
        { label: "step 1", form: <Step1 userInput={userInput} /> }, 
        { label: "step 2", form: <Step2 userInput={userInput} /> }, 
        { label: "step 3", form: <Step3 userInput={userInput} /> }
    ]

  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  })

  userInput.bmr = 
  (gender === 'female') ? 
    ((9.99 * weight + 6.25 * height - 4.92 * age) - 161).toFixed(0)
    : (9.99 * weight + (6.25 * height) - (4.92 * age) + 5).toFixed(0)

  userInput.tdee = ((Number(bmr) * Number(activityLevel))).toFixed(0)

  return (
    <React.Fragment>
    <Grid width="100%" pt={6}>
        <GridItem width="100%">
            <Steps onClickStep={(step) => setStep(step)} activeStep={activeStep} mb={{base:'-2rem', xs: '0rem', md: '1rem', lg: '2rem'}}>
                {steps.map(({ label, form }) => (
                <Step label={label} key={label}>
                    {form}
                </Step>
                ))}
            </Steps>
        </GridItem>

        <Center w='100%' h='100%'>
            <GridItem>
                <Square>
                    {activeStep === steps.length ? (
                        <Flex px={4} py={4} width="100%" flexDirection="column">
                        <Heading fontSize="xl" textAlign="center" pt={{base: '-1rem', md: '1.5rem', lg: '1.5rem'}}>
                            your bmr is {userInput.bmr}
                            <br></br>
                            your tdee is {userInput.tdee}
                            <br></br>
                            you will lose {weightloss}{unit} in {userInput.dietLength} days.
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

                                <Button size="md" onClick={nextStep} id="button">
                                    {activeStep === steps.length - 1 ? "finish" : "next"}
                                </Button>
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