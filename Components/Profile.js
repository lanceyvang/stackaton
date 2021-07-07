import React from 'react';
import { ListItem } from 'react-native-elements'
// import { View } from 'react-native';
// import HeaderBar from './Header';
import { Container, Header } from 'native-base';

const list = [
  {
    title: 'Password',
    icon: 'blur-on'
  },
  {
    title: 'Saved',
    icon: 'flight-takeoff'
  },
  {
    title: 'Payments',
    icon: 'attach-money'
  },
  {
    title: 'Post You\'ve Liked',
    icon: 'thumb-up'
  },
  {
    title: 'Original Photos',
    icon: 'photo'
  },
  {
    title: 'Search History',
    icon: 'search'
  },
  // ... // more items
]

const Profile = () => {
  return (
    <Container >
      <Header />
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
          />
        ))
      }
    </Container >
  )
}

export default Profile;

