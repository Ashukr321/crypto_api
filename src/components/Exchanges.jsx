import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { server } from '../index';
import { Container, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Exchanges = () => {

  useEffect(()=>{
    Aos.init();
  },[]);
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error === true) {
    return <ErrorComponent message={'Error While Fetching Exchange Data'} />;
  }
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {exchanges.map(i => (
              <div data-aos="fade-left">
                <ExchangeCard
                  name={i.name}
                  image={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                  key={i.key}
                />
              </div>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, image, rank, url }) => (
  <a href={url} target={'blank'}>
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
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);
export default Exchanges;
