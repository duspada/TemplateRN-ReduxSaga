import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    minWidth: metrics.screenWidth,
    height: 54 + metrics.statusHeight,
    paddingTop: metrics.statusHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secundary,
  },
});

export default styles;
