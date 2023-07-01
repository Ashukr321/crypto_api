import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { server } from '../index';
import { Container, Button ,HStack} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol =
    currency==="inr"? "₹": currency==="eur" ?"€":"$";
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios(`${server}/coins/markets?vs_currency=${currency}`);
        setCoins(data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [currency]);

  if (error === true) {
    return <ErrorComponent message={'Error While Fetching Coins'} />;
  }
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {coins.map(i => (
              <div>
                <CoinCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  price={i.current_price}
                  image={i.image}
                  rank={i.trust_score_rank}
                  currencySymbol={currencySymbol}
                />
              </div>
            ))}
          </HStack>
          <HStack>
            <Button>2</Button>
          </HStack>
        </>
      )}
    </Container>
  );
};
 

export default Coins