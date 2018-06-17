import React from 'react';
import { createBottomTabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Map from './Components/Map';
import CardView from './Components/CardView';
import Profile from './Components/Profile';
import ShareReview from './Components/ShareReview';
import Follow from './Components/Follow';
// import UploadScreen from './Components/UploadScreen';
import SingleView from './Components/SingleView';

const TabNav = createBottomTabNavigator({
    cardView: { //first item is default view
        screen: CardView,
        navigationOptions: {
            tabBarLabel: 'Home',
             tabBarIcon: () => <Icon name='home'/>
        },
    },
    map: {
        screen: Map,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: () => <Icon name='map'/>
        }
}, // waiting for working map component
    review: {
        screen: ShareReview,
        navigationOptions: {
            tabBarLabel: 'Review',
            tabBarIcon: () => <Icon name='ios-add-circle-outline'/>
        }
},  // waiting for follow component
    follow: {
        screen: Follow,
        navigationOptions: {
            tabBarLabel: 'Follow',
            tabBarIcon: () => <Icon name='heart' />
        }
    },
    // waiting for profile component
    profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name='person'/>
        },

    }
})

export default TabNav;
