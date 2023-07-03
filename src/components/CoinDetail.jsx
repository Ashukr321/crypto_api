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
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
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

  if (error) return <Error message={'Error While Fetching CoinsDetails'} />;
  return (
    <Container maxW={'container.xl'} p={['15', '20']}>
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <HStack flex={'flex'} justifyContent={'center'} w={'full'} m={'auto'}>
            <RadioGroup defaultValue={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'}>
                <Radio value={'inr'}>INR</Radio>
                <Radio value={'usd'}>USD</Radio>
                <Radio value={'eur'}>EUR</Radio>
              </HStack>
            </RadioGroup>
          </HStack>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text
              fontSize={'md'}
              color={'purple'}
              textAlign={'center'}
              alignSelf={'center'}
              opacity={'0.7'}
            >
              Last Updated on{' '}
              {Date(coins.market_data.last_updated).split('G')[0]}
            </Text>
            <HStack
              w={'full'}
              flex={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
            >
              <Image
                src={coins.image.large}
                w={'25'}
                h={'20'}
                objectFit={'contain'}
              ></Image>
              <VStack>
                <Stat>
                  <StatLabel
                    textAlign={'center'}
                    color={'purple.500'}
                    fontSize={'xl'}
                  >
                    {coins.name}
                  </StatLabel>
                  <StatNumber
                    textAlign={'center'}
                    color={'blackAlpha'}
                    fontSize={'3xl'}
                  >
                    {currencySymbol}
                    {coins.market_data.current_price[currency]}
                  </StatNumber>
                  <StatHelpText textAlign={'center'} fontSize={'xl'}>
                    <StatArrow
                      type={
                        coins.market_data.market_cap_change_percentage_24h > 0
                          ? 'increase'
                          : 'decrease'
                      }
                    />
                    {coins.market_data.market_cap_change_percentage_24h} %
                  </StatHelpText>
                </Stat>
                <Badge
                  fontSize={'2xl'}
                  bgColor={'purple.500'}
                  p={'2'}
                  color={'white'}
                  shadow={'base'}
                >{`#${coins.market_cap_rank}`}</Badge>

                <CustomBar high={`${coins.market_data.high_24h[currency]}`} low={`${coins.market_data.low_24h[currency]}`} />
                <Box
                  w={'full'}
                  p={'4'}
                >
                 <Item title={"Max Supply"} value ={coins.market_data.max_supply}/>
                 <Item title={"Circulating Supply"} value ={coins.market_data.circulating_supply}/>
                 <Item title={"Market Cap"} value ={`${currencySymbol}${coins.market_data.market_cap[currency]}`}/>
                 <Item title={"All Time Low"} value ={`${currencySymbol}${coins.market_data.atl[currency]}`}/>
                 <Item title={"All Time High"} value ={`${currencySymbol}${coins.market_data.ath[currency]}`}/>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item =({title,value})=>{
 return (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'} >
  <Text fontFamily={'bebas neue'} letterSpacing={'widest'}>{title}</Text>
  <Text fontFamily={'bebas neue'}>{value}</Text>
</HStack>
 )
}



const CustomBar = ({high, low}) => {
  return (
    <VStack w={'full'}>
      <Progress value={50} colorScheme={'teal'} w={'full'} />
      <HStack justifyContent={'space-between'} width={'full'}>
        <Badge children={low} colorScheme={'red'} />
        <Text fontSize={'sm'}>24H RANGE</Text>
        <Badge children={high} colorScheme={'green'} />
      </HStack>
    </VStack>
  );
};
export default CoinDetail;
