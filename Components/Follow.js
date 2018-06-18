import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from 'react-native-elements'
import { Header } from 'native-base';

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
  // ... // more items
]

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

const Follow = () => {
  return (
    <View >
      <Header />
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
