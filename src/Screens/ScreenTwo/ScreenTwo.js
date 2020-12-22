import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {Value} from '../../Components/Utility';
import {BodyContainer, RadioButton, LabeledTextInput} from '../../Components';
import Button from '../../Components/Button';
import {connect} from 'react-redux';
import {SubmitUserDetails} from '../../redux/actions';

const ScreenTwo = props => {
  const [profType, setProfType] = useState ('student');
  const [fullName, setFullName] = useState ('');
  const [upiID, setUpiID] = useState ('');

  const onNext = () => {
    if (fullName && upiID) {
      props.SubmitUserDetails ({
        Name: fullName,
        UPI_ID: upiID,
        Profession: profType,
      });
      props.navigation.navigate ('ScreenThree');
    } else {
      alert ('Fill all required fields');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.screenSubTitle}>
            setup your GoDutch account {' '}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <BodyContainer style={styles.bodyContainer}>
            <RadioButton
              setProfType={e => setProfType (e)}
              profType={profType}
              title={'current profession '}
            />

            <LabeledTextInput
              value={fullName}
              setValue={e => setFullName (e)}
              label={'full name'}
              valueType={'Default'}
              limit={false}
              style={{marginTop: Value (31)}}
            />
            <LabeledTextInput
              value={upiID}
              setValue={e => setUpiID (e)}
              label={'UPI ID'}
              valueType={'Default'}
              limit={false}
              style={{marginTop: Value (31)}}
            />
            <View style={styles.BtnFloat}>
              <Button btnTitle={'Continue'} onPress={() => onNext ()} />
            </View>
          </BodyContainer>
        </TouchableWithoutFeedback>

        <View style={styles.bottomContainer} />
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  bodyContainer: {
    flex: 0.889,
    paddingHorizontal: Value (15),
  },
  headerContainer: {
    flex: 0.067,
  },
  bottomContainer: {
    flex: 0.043,
  },
  screenSubTitle: {
    fontSize: Value (14),
    fontWeight: '500',
    bottom: Value (6),
    position: 'absolute',
    lineHeight: Value (18),
    left: Value (10),
    fontFamily: Platform.OS === 'android' ? 'Montserrat' : 'Avenir',
  },
  BtnFloat: {
    top: '13%',
    alignItems: 'center',
  },
});

export default connect (null, {SubmitUserDetails}) (ScreenTwo);
