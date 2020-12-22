import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Value} from '../Utility';

const Divider = props => {
  return <View style={[styles.divider, props.style]} />;
};

const styles = StyleSheet.create ({
  divider: {
    marginTop: Value (30),

    borderStyle: 'dashed',
    borderWidth: Value (0.6),
    borderRadius: 1,
    borderColor: '#F1F1F1',
  },
});

export default Divider;
