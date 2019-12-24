import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window');

export default {
  headerPadding: Platform.OS === 'ios' ? 20 : 0,
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusHeight: getStatusBarHeight(),
};
