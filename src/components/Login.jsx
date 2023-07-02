import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Login = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full' ,'96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textAlign={'center'}>Welcome Back</Heading>
            <Input
              placeholder={'Email'}
              type="email"
              required
              focusBorderColor="purple.500"
            />
  
            <Input
              placeholder={'Password'}
              type="password"
              required
              focusBorderColor="purple.500"
            />
  
            <Button alignSelf={'flex-end'} variant={'link'}>
              <Link to={'/forgetpassword'}>Forget Password</Link>
            </Button>
  
            <Button colorScheme="purple" type="submit">
              Login
            </Button>
  
            <Text textAlign={'right'}>New Users ? 
            <Button variant={'link'} colorScheme='purple'>
              <Link to={'/signup'}>Sign Up</Link>
            </Button></Text>
  
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Login;
  