import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../contants/Colors.css';
<contants />;
const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'var(--dark)'}
       flex={'row'}  justifyContent={'center'} >
      <Button variant={'unstyled'} color={'white'} mx={'3'} >
        <Link to={'/'} >Home</Link>
      </Button>

      <Button variant={'unstyled'} color={'white'} mx={'3'}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>

      <Button variant={'unstyled'} color={'white'} mx={'3'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>


    </HStack>
  );
};

export default Header;
