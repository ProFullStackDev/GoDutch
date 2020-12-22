import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {screenHeight, Value} from '../Utility';

const RadioButton = props => {
  const {profType, title} = props;

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.checkRow}>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            {borderColor: profType === 'student' ? '#5A67F2' : '#F1F1F1'},
          ]}
          onPress={() => {
            if (profType === 'profession') {
              props.setProfType ('student');
            }
          }}
        >
          <Text
            style={[
              styles.txtStyle,
              {color: profType === 'student' ? '#5A67F2' : '#444444'},
            ]}
          >
            Student{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            {borderColor: profType === 'profession' ? '#5A67F2' : '#F1F1F1'},
          ]}
          onPress={() => {
            if (profType === 'student') {
              props.setProfType ('profession');
            }
          }}
        >
          <Text
            style={[
              styles.txtStyle,
              {color: profType === 'profession' ? '#5A67F2' : '#444444'},
            ]}
          >
            Professional{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {},
  header: {
    fontSize: Value (14),
    lineHeight: Value (18),
    fontWeight: '500',
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
  checkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Value (6),
  },
  btnStyle: {
    width: Value (150),
    height: Value (42),
    borderRadius: Value (5),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    fontSize: Value (15),
    fontWeight: '400',
    lineHeight: Value (19),
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
});

export default RadioButton;
