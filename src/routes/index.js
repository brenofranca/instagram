import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthScreen from '../pages/auth';
import HomeScreen from '../pages/home';

const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
});

const AppNavigator = createSwitchNavigator({
  AuthScreen: {
    screen: AuthScreen,
  },
  HomeScreen: {
    screen: HomeNavigator,
  },
});

export default createAppContainer(AppNavigator);
