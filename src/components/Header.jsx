import React from 'react'
import {
    Text,
  } from '@chakra-ui/react';

const Header = () => {
  return (
    <React.Fragment>
        <Text fontSize={{base: '3xl', md: '5xl', lg: '4xl'}} textAlign='center' padding={0} fontWeight={{base: 500}}>varied intake weight loss calculator</Text>
            <Text fontSize={{base: '2xl', md: '3xl', lg: '3xl'}} textAlign='center'>life is ever changing. why isn't your diet?</Text>
    </React.Fragment>
  )
}

export default Header