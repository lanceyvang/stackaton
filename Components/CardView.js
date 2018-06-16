// import React, { Component } from 'react';
// import { Image, ScrollView } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
// import { Font } from 'expo';
// //Dummy data renders via map of users
// const users = [
//     {
//       userIcon: 'https://i.imgur.com/y8aEcTa.jpg',
//       tagName: 'hangryeatsnyc',
//       location: 'Shack Shack',
//       foodUrl: 'https://i.imgur.com/HPhlpTn.jpg',
//       likes: 1000,
//       description: 'Fancy Lobster'
//     },
//    {
//         userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
//         tagName: 'Fullstack',
//         location: 'BurgerTown',
//         foodUrl: 'https://i.imgur.com/2qaSZT3.jpg',
//         likes: 5000,
//         description: 'Fancy Burgers'
//       },
//       {
//         userIcon: 'https://i.imgur.com/8SxyxAg.jpg',
//         tagName: 'foodies',
//         location: 'Korean BBQ',
//         foodUrl: 'https://i.imgur.com/8E8e4zW.jpg',
//         likes: 2000000,
//         description: 'Fancy Korean BBQ'
//       }

// ]

// export default class CardShowcaseExample extends Component {
//   constructor(){
//     super()
//     this.state = {
//       fontLoaded: false
//     }
//   }

//  async componentDidMount() {
//    await Font.loadAsync({
//      'Roboto_medium': require('./Roboto_medium.ttf'),
//    });
//    this.setState({ fontLoaded: true });
//  }

//   render() {
//     return (
//       <Container>
//         <Header />
//         <ScrollView>
//           {
//             this.state.fontLoaded && users.map((user, i) => {
//               return (
//                 <Content key={i}>
//                   <Card style={{ flex: 0 }}>
//                     <CardItem>
//                       <Left>
//                         <Thumbnail source={{ uri: user.userIcon}} />
//                         <Body>
//                           <Text>{user.tagName}</Text>
//                           <Text note>{user.location}</Text>
//                         </Body>
//                       </Left>
//                     </CardItem>
//                     <CardItem>
//                       <Body>
//                         <Image source={{ uri: user.foodUrl }} style={{ height: 200, width: 340, flex: 1 }} />
//                         <Text>
//                         {user.description}
//                         </Text>
//                       </Body>
//                     </CardItem>
//                     <CardItem>
//                       <Left>
//                         <Button transparent textStyle={{ color: '#87838B' }}>
//                           <Icon onPress={(user) => user.likes = 99 } name="heart" />
//                           <Text>{user.likes} likes</Text>
//                         </Button>
//                       </Left>
//                     </CardItem>
//                   </Card>
//                 </Content>
//               )
//             })
//           }
//         </ScrollView>
//       </Container>
//     );
//   }
// }

import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

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

export default class CardImageExample extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <Container>
        <ScrollView>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='camera' />
              </Button>
            </Left>
            <Body>
              <Title>Stackathon</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='ios-paper-plane-outline' />
              </Button>
            </Right>
          </Header>
          {
            users.map(user => {
              return (
                <Content key = {user.foodUrl}>
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{ uri: user.userIcon }} />
                        <Body>
                          <Text>{user.tagName}</Text>
                          <Text note>{user.location}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={{ uri: user.foodUrl }} style={{ height: 300, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text>{user.likes} Likes</Text>
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Text>11h ago</Text>
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
