import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Redux from '~/store/Redux';

import styles from './styles';

class Main extends Component {
  static navigationOptions = () => ({
    // header: null,
    title: 'Bottom Title',
    tabBarIcon: <Icon name="comments" size={20} color="#fff" />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Header title="Main" />
        <View style={styles.container}>
          <Text style={styles.title}>Hello World!</Text>
        </View>
      </View>
    );
  }
}

export default Redux(Main);
