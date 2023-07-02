import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Stack,
    VStack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { AiOutlineSend, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
  const Footer = () => {
    return (
      <Box bgColor={'purple.600'} minH={'40'} p={'10'} color={'white'}>
        <Stack direction={['column', 'row']} textAlign={['center','left']}>
          <VStack w={'full'} alignItems={'stretch'} px={'4'}>
            <Heading colorScheme="purple" textTransform={'uppercase'}>
              TechyAshu
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder={'Drop Me Message . . .'}
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
              ></Input>
              <Button
                color={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} color="purple"></AiOutlineSend>
              </Button>
            </HStack>
          </VStack>
  
          <VStack
            w={'full'}
            borderRight={['none', '1px solid white']}
            borderLeft={['none', '1px solid white']}
            py={2}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'} mb={2}>
              Crypto Hub
            </Heading>
            <Text>All right recived</Text>
          </VStack>
  
          <VStack w={'full'} py={2}>
            <Heading size={'md'} textTransform={'uppercase'} mb={2}>
              Social Media
            </Heading>
            <HStack>
              <a
                href="https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/"
                target="blank"
              >
                <AiFillLinkedin size={30} />
              </a>
              <a
                href="https://instagram.com/ashukr321?igshid=MzNlNGNkZWQ4Mg=="
                target="blank"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="https://github.com/Ashukr321"
                target="blank"
              >
                <AiFillGithub size={30} />
              </a>
            </HStack>
          </VStack>
  
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  