import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Value} from '../Utility';

const Button = props => {
  const {btnTitle} = props;
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={() => props.onPress ()}>
      <Text style={styles.titleStyle}>{btnTitle}{' '}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  btnStyle: {
    height: Value (50),
    width: Value (180),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Value (5),
    backgroundColor: '#5A67F2',
  },
  titleStyle: {
    fontSize: Value (19.5),
    fontWeight: '600',
    color: 'white',
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
});

export default Button;
