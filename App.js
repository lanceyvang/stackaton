import React from 'react';
import { createBottomTabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import MapScreen from './Components/Map'
import Profile from './Components/Profile';
import ShareReview from './Components/ShareReview';
import Follow from './Components/Follow';
import Home from './Components/Home';
import SingleView from './Components/SingleView';
import StackNavigation from './Components/StackNavigation';

const TabNav = createBottomTabNavigator({
    home: { //first item is default view
        screen: StackNavigation,
        navigationOptions: {
            tabBarLabel: 'Home',
             tabBarIcon: () => <Icon name='home'/>
        },
    },
    map: {
        screen: MapScreen,
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
