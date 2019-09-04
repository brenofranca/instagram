import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthScreen from '../pages/auth';
import HomeScreen from '../pages/home';

const HomeNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  HomeScreen: {
    screen: HomeNavigator,
  },
  AuthScreen: {
    screen: AuthScreen,
  },
});

export default createAppContainer(AppNavigator);
