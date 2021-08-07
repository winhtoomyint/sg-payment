import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import RNOtpVerify from 'react-native-otp-verify';

import CountDown from '../../components/timer/timer';
import SmoothPinCodeInput from '../../components/otpInput/otpInput';
import {Colors, Scales} from '@common';
import styles from './signUp.styles';
import * as authActions from '../../store/action/auth';
import Card from '../../components/ui/Card';

const SignUpScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [showResend, setShowResend] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const sendOtpHandler = async () => {
    if (phone.length < 10) {
      // ToastAndroid.show(
      //   'Enter Valid 10 Digit Phone Number',
      //   ToastAndroid.SHORT,
      // );
      Alert.alert('Error', 'Enter Valid 10 Digit Phone Number', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      setError(null);
      setLoading(true);
      setShowResend(false);
      setShowTimer(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const signUpHandler = async () => {
    if (otp.length < 5) {
      // ToastAndroid.show('Enter Valid 5 Digit OTP', ToastAndroid.SHORT);
      Alert.alert('Error', 'Enter Valid 5 Digit OTP', [
        {text: 'Okay', style: 'default'},
      ]);
    } else if (password.length < 4) {
      // ToastAndroid.show('Enter Valid 4 Digit Password', ToastAndroid.SHORT);
      Alert.alert('Error', 'Enter Valid 4 Digit Password', [
        {text: 'Okay', style: 'default'},
      ]);
    } else if (phone.length < 10) {
      // ToastAndroid.show(
      //   'Enter Valid 10 Digit Phone Number',
      //   ToastAndroid.SHORT,
      // );
      Alert.alert('Error', 'Enter Valid 10 Digit Phone Number', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      setError(null);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        props.navigation.navigate('App');
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View style={styles.container}>
        <View style={styles.midContainer}>
          <View style={styles.topContainer}>
            <Image
              style={styles.topImage}
              resizeMode={'contain'}
              source={require('../../assets/img/leftDot.png')}
            />

            <View style={styles.registerContainer}>
              <Text style={styles.loginText}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.loginLineText}>Create SPAY Account</Text>
          </View>
          <Card style={styles.card}>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: phone ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'call-outline'} size={24} color={'#8b16ff'} />
              <TextInput
                style={styles.body}
                placeholder={'10 digit mobile number'}
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                onBlur={() => {
                  sendOtpHandler();
                }}
              />
            </View>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: otp ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'lock-closed-outline'} size={24} color={'#8b16ff'} />
              <View style={styles.otpInputContainer}>
                <View style={styles.InputWraper}>
                  <TextInput
                    style={styles.body}
                    placeholder={'5 digit OTP'}
                    autoCompleteType={'tel'}
                    keyboardType={'phone-pad'}
                    maxLength={5}
                    onChangeText={(text) => setOtp(text)}
                    value={otp}
                  />
                </View>
                <View style={styles.timerContainer}>
                  {showTimer === true ? (
                    <CountDown
                      until={30}
                      onFinish={() => {
                        setShowResend(true);
                        setShowTimer(false);
                      }}
                      onPress={() => {}}
                      size={20}
                      digitStyle={styles.timerBox}
                      digitTxtStyle={styles.timerText}
                      timeToShow={['S']}
                      timeLabels={{}}
                    />
                  ) : null}
                  {showResend === true ? (
                    <TouchableOpacity
                      style={styles.resendButton}
                      activeOpacity={0.4}
                      onPress={() => {
                        sendOtpHandler();
                      }}>
                      <Text style={styles.resendText}>RESEND</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: fullName ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'person-outline'} size={24} color={'#8b16ff'} />
              <TextInput
                style={styles.body}
                autoCompleteType={'name'}
                placeholder={'Full Name'}
                //keyboardType={'phone-pad'}
                onChangeText={(text) => setFullName(text)}
                value={fullName}
              />
            </View>
            <View style={styles.passInputWraper}>
              <View style={styles.inputIconWraper}>
                <Icon name={'key-outline'} size={24} color={'#8b16ff'} />
              </View>
              <View style={styles.passInputContainer}>
                {/* <Text style={styles.placeholderText}>
                  Enter 4 digit password
                </Text> */}
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  animated={false}
                  cellStyle={{
                    marginTop: 3,
                    width: 70,
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                  }}
                  cellStyleFocused={{
                    borderColor: '#8b16ff',
                  }}
                  value={password}
                  onTextChange={(text) => {
                    setPassword(text);
                  }}
                />
              </View>
            </View>
          </Card>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By proceeding, you agree to SPAY{' '}
            </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text style={styles.termsBtnText}>Terms & Conditions</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}> & </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              <Text style={styles.termsBtnText}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginBtnSection}>
            <View style={styles.loginBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    signUpHandler();
                  }}>
                  <Text style={styles.loginBtnText}>Sign Up</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Already have SPAY account?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.bottomImage}
              resizeMode={'contain'}
              source={require('../../assets/img/rightDot.png')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
