import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
// import { Icon } from 'react-native-elements'
import { Icon } from 'native-base'

import Map from './Components/Map'
import CardView from './Components/CardView';
import Test from './Components/Test'

const TabNav = createBottomTabNavigator({
    cardView: { //first item is default view
        screen: CardView,
        navigationOptions: {
            tabBarLabel: 'CardView',
             tabBarIcon: () => <Icon name='home'/>
        },
    },
    map: {
        screen: Map,
        navigationOptions: {
            tabBarLabel: 'CardView',
            tabBarIcon: () => <Icon name='map'/>
        }
    
},
    profile: {
        screen: Test,        
        navigationOptions: {
            tabBarLabel: 'Test',
            tabBarIcon: () => <Icon name='person'/>
    }
}})

export default TabNav;
