import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Divider from '../Divider';
import {Value} from '../Utility';

const ListItem = props => {
  const {Value, Key} = props;

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={[styles.commonStyle, {color: '#444444'}]}>{Key}</Text>
        <Divider />
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.commonStyle, {color: '#5A67F2'}]}>{Value}</Text>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
  },
  commonStyle: {
    fontSize: Value (15),
    lineHeight: Value (19),
    fontWeight: '500',
    textAlignVertical: 'center',
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
});

export default ListItem;
