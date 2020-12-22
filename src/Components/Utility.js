import {Platform, StatusBar, Dimensions, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get ('window');
const standardLength = width > height ? width : height;
const offset = width > height
  ? 0
  : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

const deviceHeight = Platform.OS === 'android'
  ? standardLength - offset
  : standardLength;

export function Percentage (percent) {
  const heightPercent = percent * deviceHeight / 100;
  return Math.round (heightPercent);
}

export function Value (fontSize, standardScreenHeight = deviceHeight) {
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Math.round (heightPercent);
}

export const screenHeight = height;
export const screenWidth = width;
export const logoIcon = require ('../../assets/icons/appIcon.png');
export const logoText = require ('../../assets/icons/goDutch.png');
