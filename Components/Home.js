import React, { Component } from 'react';
import { Font } from 'expo';
import CardView from './CardView';

//Dummy data while waiting for Firebase
const users = [
  {
    userIcon: 'https://yt3.ggpht.com/-ThETAy9Qcm4/AAAAAAAAAAI/AAAAAAAAAAA/k777ngq8xGs/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
    tagName: 'Mark Weins',
    location: 'Katz’s Delicatessen',
    foodUrl: 'https://photos.smugmug.com/New-York-City/i-2pCXSmw/0/X3/katzs-deli-2-X3.jpg',
    likes: 2113,
    description: 'Fancy Burgers',
    time: '3 minutes ago'
  },
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
    location: 'Pasta Palace',
    foodUrl: 'https://i.imgur.com/8E8e4zW.jpg',
    likes: 2000000,
    description: 'Fancy Korean BBQ',
    time: '3 hours ago'
  }
]

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false,
      users: users
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const {navigation} = this.props
    return (
      this.state.fontLoaded &&
      <CardView
        navigation={navigation}
        users={this.state.users}
      />
    )
  }
}
