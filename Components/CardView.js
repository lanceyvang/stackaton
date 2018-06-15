import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent-lga3-1.cdninstagram.com/vp/571a3aadd666d37c3d31fa086c91017f/5BA66006/t51.2885-19/s150x150/22159387_239679536560738_5146009770007724032_n.jpg' }} />
                <Body>
                  <Text>hangryeatsnyc</Text>
                  <Text note>Shake Shack</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: 'https://i.imgur.com/p0BubXv.jpg' }} style={{ height: 200, width: 340, flex: 1 }} />
                <Text>
                Oozing cheesy goodness
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="heart" />
                  <Text>2,000,002 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}