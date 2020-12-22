import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  LabeledTextInput,
  AppLogoTitle,
  Button,
  BodyContainer,
  Divider,
} from '../../Components';
import {connect} from 'react-redux';
import {Value} from '../../Components/Utility';
import {SubmitMobileNumber} from '../../redux/actions';

const ScreenOne = props => {
  const [value, setValue] = useState (null);

  const onContinue = () => {
    if (value && value.length === 10) {
      props.SubmitMobileNumber (value);
      props.navigation.navigate ('ScreenTwo');
      setValue (null);
    } else {
      alert ('Mobile number must be 10 digit');
    }
  };
  return (
    <View style={styles.container}>
      <BodyContainer style={styles.bodyContainer}>
        <View style={styles.floatHeader}>
          <AppLogoTitle />
          <Divider style={{marginHorizontal: Value (25)}} />
        </View>
        <LabeledTextInput
          value={value}
          setValue={e => setValue (e)}
          label={'Mobile number'}
          valueType={'Number'}
          limit={true}
        />
        <View style={styles.BtnFloat}>
          <Button btnTitle={'Continue'} onPress={() => onContinue ()} />
        </View>
      </BodyContainer>

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.593,
    justifyContent: 'center',
    paddingHorizontal: Value (15),
  },
  BtnFloat: {
    position: 'absolute',
    bottom: Value (55),
    alignSelf: 'center',
  },
  floatHeader: {
    position: 'absolute',
    alignSelf: 'center',
    top: Value (32),
    width: '100%',
  },
});

export default connect (null, {SubmitMobileNumber}) (ScreenOne);
