import {
  ChakraProvider,
  extendTheme,
  Center,
  Stack
} from "@chakra-ui/react"
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import Header from './components/Header';
import Form from './components/Form'

const theme = extendTheme({
  components: {
    Steps,
  },
});


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
