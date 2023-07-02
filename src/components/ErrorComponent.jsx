import {Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return <Alert status='error' pos={'fixed'} 
    bottom={'50%'} 
    p={'4'}
    borderRadius={'5'}
    justifyContent={'center'}
    letterSpacing={'.1em'}
    left={'50%'}
    transform={'translateX(-50%)'}
    w={['90%','container.lg']}
    textAlign={'center'}
   > 
    <AlertIcon
     / >
      {
        message
      }
  </Alert>
   
}

export default Error