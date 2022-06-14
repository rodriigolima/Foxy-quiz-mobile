import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
//import {AntDesign} from '@expo/vector-icons';
import {styles} from './styles';

export default class FabButton extends Component {
  render() {
    return (
      <View style={[styles.containerButton, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.menu]}>
            {/* <AntDesign name="up" size={24} color="#FFF" /> */}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
