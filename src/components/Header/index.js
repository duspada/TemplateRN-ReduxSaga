import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StatusBar } from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle={colors.statusBar} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
