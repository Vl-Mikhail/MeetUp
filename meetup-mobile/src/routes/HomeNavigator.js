import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
    HomeScreen,
    NotificationsScreen,
    ProfileScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
}, {
  swipeEnabled: false, // смахивание
  animationEnabled: false, // анимация
  tabBarPosition: 'bottom', // позиция
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor, // иконка
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    indicatorStyle: { backgroundColor: Colors.redColor },
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
