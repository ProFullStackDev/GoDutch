import React from 'react';
import {View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import {Value} from '../../Components/Utility';
import {BodyContainer, Button, ListItem} from '../../Components';
import {connect} from 'react-redux';
import {FinalSubmit} from '../../redux/actions';

const ScreenThree = props => {
  const renderItem = () => {
    Object.entries (props.userData).forEach (([key, value]) => (
      <ListItem Key={key} Value={value} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.screenSubTitle}>
          Your details {' '}
        </Text>
      </View>
      <BodyContainer style={styles.bodyContainer}>

        <ListItem Key={'Name'} Value={props.userData.Name} />
        <ListItem Key={'MobileNo'} Value={props.userData.MobileNo} />
        <ListItem Key={'Upi id'} Value={props.userData.UPI_ID} />
        <ListItem Key={'Profession'} Value={props.userData.Profession} />

      </BodyContainer>

      <View style={styles.bottomContainer}>
        <View style={styles.BtnFloat}>
          <Button
            btnTitle={'Continue'}
            onPress={() => props.navigation.navigate ('ScreenOne')}
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  bodyContainer: {
    flex: 0.713,
    paddingHorizontal: Value (16),
    paddingTop: Value (16),
  },
  headerContainer: {
    flex: 0.067,
  },
  bottomContainer: {
    flex: 0.220,
  },
  screenSubTitle: {
    fontSize: Value (14),
    fontWeight: '500',
    bottom: Value (6),
    position: 'absolute',
    lineHeight: Value (18),
    left: Value (20),
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
  BtnFloat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => {
  return {
    userData: state.UserData,
  };
};
export default connect (mapStateToProps, {FinalSubmit}) (ScreenThree);
