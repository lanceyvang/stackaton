import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Map from './Components/Map'
import CardView from './Components/CardView';
import Test from './Components/Test'

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
    
},
    profile: {
        screen: Test,        
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name='person'/>
    }
}})

export default TabNav;
