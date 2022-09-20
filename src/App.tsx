import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Input,
  Center,
  Stack
} from "@chakra-ui/react"
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import Header from './components/Header';
import Form from './components/Form'
import { Stepper } from './components/Stepper'
import { useState } from "react";

const log = console.log

const theme = extendTheme({
  components: {
    Steps,
  },
});

// const onChooseDate = () => {
//   log('props successfully passed down')
// }



export const App = () => (

  <ChakraProvider theme={theme}>
    <Center w='100%' h='100%'>
      <Stack spacing={3} w='40%' pt={5}>

        <Header />
        <Form />

      </Stack>
    </Center>
  </ChakraProvider>
)
