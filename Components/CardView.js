import React, { Component } from 'react';
import { TouchableOpacity, Image, ScrollView } from 'react-native';
import { Title, Right, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class CardShowcaseExample extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    const users = this.props.users;
    const navigation = this.props.navigation;
   
    return (
    <Container>
      {
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
          users.map((user, i) => {
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
                      <TouchableOpacity style={{ height: 200, width: 340, flex: 1 }} onPress={() => navigation.navigate('singleview')}>
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
