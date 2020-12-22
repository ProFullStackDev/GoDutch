import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Value, logoIcon, logoText} from '../Utility';

const AppLogoTitle = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={logoIcon}
        resizeMethod="auto"
        resizeMode="contain"
      />
      <Image
        style={styles.imgStyle}
        source={logoText}
        resizeMethod="auto"
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: Value (37),
  },
});

export default AppLogoTitle;
