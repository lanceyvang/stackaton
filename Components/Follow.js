import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from 'react-native-elements'
import { Header, Item, Icon, Button, Input } from 'native-base';

const list = [
  {
    name: 'Mikey Chen',
    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Youtuber'
  },
  {
    name: 'Mark Weins',
    avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Youtuber'
  },

]


const Follow = () => {
  return (
    <View >
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatarUrl } }}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
    </View >
  )
};

export default Follow;
