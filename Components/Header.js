import React from 'react';
import { Left, Right, Icon, Button, Title, Body  } from 'native-base';

const Header = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon style={{ color: 'black'}} name='camera' />
        </Button>
      </Left>
      <Body>
        <Title>Stackathon</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon style={{ color: 'black' }} name='ios-paper-plane-outline' />
        </Button>
      </Right>
    </Header>
  )
}

export default Header;
