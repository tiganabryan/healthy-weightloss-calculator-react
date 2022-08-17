import React from 'react'
import {
    Box,
    Square,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Center
  } from '@chakra-ui/react';

const Header = () => {

  const title = 'the healthy weight loss calculator'
  const subHeading = 'life is ever changing. why isn\'t your diet?'
  
  return (
    <React.Fragment>
        <Text fontSize='5xl' textAlign='center'>{title}</Text>
        <Text fontSize='3xl' textAlign='center'>{subHeading}</Text>
    </React.Fragment>
  )
}

export default Header