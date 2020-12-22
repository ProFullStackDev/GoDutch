import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Value} from '../Utility';

const LabeledTextInput = props => {
  const {label, value, valueType, limit} = props;
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.labelStyle}>
        {label}<Text style={styles.impTxt}>*</Text>
      </Text>
      <TextInput
        value={value}
        onChangeText={e => props.setValue (e)}
        style={styles.txtInputStyle}
        keyboardType={valueType === 'Number' ? 'numeric' : 'default'}
        maxLength={limit ? 10 : 999}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  txtInputStyle: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 0.5,
    height: Value (42),
    fontSize: Value (15),
    textAlign: 'center',
    borderRadius: Value (5),
  },
  labelStyle: {
    fontSize: Value (14),
    fontWeight: '500',
    lineHeight: Value (18),
    paddingLeft: Value (3),
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
  impTxt: {
    color: 'red',
  },
});

export default LabeledTextInput;
