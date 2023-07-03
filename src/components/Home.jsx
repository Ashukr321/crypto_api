import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import btcSrc from './btc (1).png'
const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <Image src={btcSrc} w={'full'} h={'full'} objectFit={'contain'} />
     
    </Box>
  );
};

export default Home;
