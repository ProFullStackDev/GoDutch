import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Value} from '../Utility';

const BodyContainer = props => {
  return (
    <View style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: Value (10),
    borderRadius: Value (5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 3.22,
    elevation: 3,
  },
});

export default BodyContainer;
