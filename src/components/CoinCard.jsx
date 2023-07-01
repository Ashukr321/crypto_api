import React from 'react'
import { Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const CoinCard = ({ id,name, image, symbol,price ,currencySymbol="₹"}) => (
    <Link to={`/coin/${id}`} target={'blank'}>
      <VStack
        w={'52'}
        shadow={'lg'}
        p={'8'}
        borderRadius={'lg'}
        transition={'all .5s ease-in-out'}
        m={'4'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <img src={image} alt="logo" w={'10'} h={'10'} objectFit={'contain'} />
        <Heading size={'md'} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price? `${currencySymbol} ${price}`:'NA'}</Text>
      </VStack>
    </Link>
  );


export default CoinCard