import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Map from './Components/Map';
import CardView from './Components/CardView';
import Test from './Components/Test';
// import UploadScreen from './Components/UploadScreen';

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
    share: {
        screen: Map,
        navigationOptions: {
            tabBarLabel: 'Share',
            tabBarIcon: () => <Icon name='ios-add-circle-outline'/>
        }
},  // waiting for follow component
    follows: {
        screen: Map,
        navigationOptions: {
            tabBarLabel: 'Follows',
            tabBarIcon: () => <Icon name='heart' />
        }
    },
    // waiting for follow component
    profile: {
        screen: Test,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name='person'/>
    }
}})

export default TabNav;
