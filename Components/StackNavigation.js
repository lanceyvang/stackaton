import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import SingleView from './SingleView';

const stackNav = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  singleview: {
    screen: SingleView
  }
})

export default stackNav;
