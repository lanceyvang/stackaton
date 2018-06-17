import React, { Component } from 'react';
import { TouchableOpacity, Image, ScrollView } from 'react-native';
import { Title, Right, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Font } from 'expo';

//Dummy data renders via map of users
const users = [
  {
    userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
    tagName: 'lanceyvang',
    location: 'Shake Shack',
    foodUrl: 'https://i.imgur.com/2qaSZT3.jpg',
    likes: 5000,
    description: 'Fancy Burgers',
    time: '15 minutes ago'
  },
  {
    userIcon: 'https://i.imgur.com/y8aEcTa.jpg',
    tagName: 'hangryeatsnyc',
    location: 'Reddest Lobster',
    foodUrl: 'https://i.imgur.com/HPhlpTn.jpg',
    likes: 1000,
    description: 'Fancy Lobster',
    time: '1 hour ago'
  },
  {
    userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
    tagName: 'foodies',
    location: 'Korean BBQ',
    foodUrl: 'https://i.imgur.com/8E8e4zW.jpg',
    likes: 2000000,
    description: 'Fancy Korean BBQ',
    time: '3 hours ago'
  },{
    userIcon: 'https://i.imgur.com/y8aEcTa.jpg',
    tagName: 'hangryeatsnyc2',
    location: 'Lobster Shack',
    foodUrl: 'https://i.imgur.com/HPhlpTn.jpg',
    likes: 1000,
    description: 'Maine Lobster',
    time: '4 hours ago'
  }
]

export default class CardShowcaseExample extends Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

 async componentDidMount() {
   await Font.loadAsync({
     'Roboto_medium': require('./Roboto_medium.ttf'),
   });
   this.setState({ fontLoaded: true });
 }

  render() {
    console.log(this.props.navigation);
    return (
      <Container>
        {
          this.state.fontLoaded &&
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
        }
        <ScrollView>
          {
            this.state.fontLoaded && users.map((user, i) => {
              return (
                <Content key={i}>
                  <Card style={{ flex: 0 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{ uri: user.userIcon}} />
                        <Body>
                          <Text>{user.tagName}</Text>
                          <Text note>{user.time}</Text>
                        </Body>
                      </Left>
                      <Right>
                        <Text>{user.location}</Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <TouchableOpacity style={{ height: 200, width: 340, flex: 1 }} onPress={() => this.props.navigation.navigate('profile')}>
                          <Image source={{ uri: user.foodUrl }} style={{ height: 200, width: 340, flex: 1 }} />
                        </TouchableOpacity>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                          <Icon onPress={(user) => user.likes = 99 } name="thumbs-down" />
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Text>{user.likes} likes</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                          <Icon name="thumbs-up" />
                        </Button>
                      </Right>
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
