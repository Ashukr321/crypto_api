import {
  Box,
  Container,
  HStack,
  RadioGroup,
  Radio,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { server } from '../index';
import { useParams } from 'react-router-dom';
import Error from './ErrorComponent';
import axios from 'axios';

const CoinDetail = () => {
  const [coins, setCoins] = useState();
  const [currency, setCurrency] = useState('inr');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
  const params = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id]);

  if (error)
    return <Error message={'Error While Fetching CoinsDetails'} />;
  return (
    <Container maxW={'container.xl'} p={'20'}  >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box w={'full'} borderWidth={1}>
            efaefw
          </Box>

          <HStack flex={'flex'} justifyContent={'center'} w={'full'} m={'auto'}>
            <RadioGroup defaultValue={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'} m={'0 20'}>
                <Radio value={'inr'}>INR</Radio>
                <Radio value={'usd'}>USD</Radio>
                <Radio value={'eur'}>EUR</Radio>
              </HStack>
            </RadioGroup>
          </HStack>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text fontSize={'md'} color={'purple'} textAlign={'center'} alignSelf={'center'} opacity={'0.7'}>
              Last Updated on{' '}
              {Date(coins.market_data.last_updated).split('G')[0]}
            </Text>
            <HStack w={'full'} flex={'flex'} flexDirection={'column'} justifyContent={'center'}> 
              <Image
                src={coins.image.large}
                w={'25'}
                h={'20'}
                objectFit={'contain'}
              ></Image>
              <VStack>
              <Stat>
              <StatLabel textAlign={'center'} color={'purple.500'} fontSize={'2xl'} >{coins.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coins.market_data.current_price[currency]}
              </StatNumber>
            </Stat>
              </VStack>
            </HStack>

            
          </VStack>
        </>
      )}
    </Container>
  );
};

export default CoinDetail;
