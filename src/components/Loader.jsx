import { Text, Box, VStack, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner color="purple.500" size={'xl'}></Spinner>
        <Text size={'4'} color={'purple.500'} fontWeight={'400'}>
          Loading
        </Text>
      </Box>
    </VStack>
  );
};

export default Loader;
