import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


//Dummy data renders via map of users
const users = [
    {
      userIcon: 'https://i.imgur.com/y8aEcTa.jpg',
      tagName: 'hangryeatsnyc',
      location: 'Shack Shack',
      foodUrl: 'https://i.imgur.com/HPhlpTn.jpg',
      likes: 1000,
      description: 'Fancy Lobster'
    },
   {
        userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
        tagName: 'Fullstack',
        location: 'BurgerTown',
        foodUrl: 'https://i.imgur.com/2qaSZT3.jpg',
        likes: 5000,
        description: 'Fancy Burgers'
      },
      {
        userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
        tagName: 'foodies',
        location: 'Korean BBQ',
        foodUrl: 'https://i.imgur.com/8E8e4zW.jpg',
        likes: 2000000,
        description: 'Fancy Korean BBQ'
      }

]



export default class CardShowcaseExample extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Header />
        <ScrollView>
          {
            users.map((user, i) => {
              return (
                <Content key={i}>
                  <Card style={{ flex: 0 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{ uri: user.userIcon}} />
                        <Body>
                          <Text>{user.tagName}</Text>
                          <Text note>{user.location}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Image source={{ uri: user.foodUrl }} style={{ height: 200, width: 340, flex: 1 }} />
                        <Text>
                        {user.description}
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                          <Icon onPress={(user) => user.likes = 99 } name="heart" />
                          <Text>{user.likes} likes</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                </Content>
              )
            })
          }
        </ScrollView>
      </Container>
    );
  }
}


