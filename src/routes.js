import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '~/styles';
import Main from '~/pages/main';
import SecondMain from '~/pages/main/secondBottom';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main: createBottomTabNavigator(
      {
        Main,
        SecondMain,
      },
      {
        tabBarOptions: {
          showIcon: true,
          showLabel: true,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          style: {
            backgroundColor: colors.secundary,
          },
        },
      },
    ),
  }),
);

export default Routes;
