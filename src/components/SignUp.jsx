import { Avatar, Container } from '@chakra-ui/react';
import { Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} data-aos="fade-right">
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'} color={'purple.500'}>CRYPTO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder={'Name'}
            type="text"
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder={'Password'}
            type="password"
            required
            focusBorderColor="purple.500"
          />

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Sign Up ?
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
