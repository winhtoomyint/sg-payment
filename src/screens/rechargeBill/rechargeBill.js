import React, {useState, useEffect, useRef, Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Easing,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import PickerSelect from '../../components/dropDown/dropdown';
import Card from '../../components/ui/Card';
import InnerHeader from '../../components/ui/innerHeader';
import {Colors, Scales} from '@common';
import styles from './rechargeBill.styles';

const RechargeScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const serviceName = props.navigation.getParam('serviceName');
  let operatorData = [
    {label: 'Vodafone', value: 'Vodafone'},
    {label: 'Idea', value: 'Idea'},
    {label: 'Airtel', value: 'Airtel'},
    {label: 'Jio', value: 'Jio'},
    {label: 'BSNL', value: 'BSNL'},
  ];

  let cercleData = [
    {label: 'Maharastra', value: 'Vodafone'},
    {label: 'Mumbai', value: 'Idea'},
    {label: 'Gujarat', value: 'Airtel'},
    {label: 'Delhi', value: 'Jio'},
    {label: 'Rajasthan', value: 'BSNL'},
  ];

  const isBillPay = () => {
    if (
      serviceName === 'DTH' ||
      serviceName === 'Gas' ||
      serviceName === 'Power Bill'
    ) {
      return true;
    } else {
      return false;
    }
  };

  // item.name === 'Prepaid' ||
  //   item.name === 'Postpaid' ||
  //   item.name === 'DTH' ||
  //   item.name === 'Datacard';

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'chevron-back'}
        title={serviceName}
        onLeftIconPress={() => {
          props.navigation.goBack();
        }}
      />
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <View style={styles.midContainer}>
          <Card style={styles.offerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.offerTitle}>20% Recharge Offer</Text>
              <Text style={styles.offerDesc}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet
              </Text>
            </View>
            <View>
              <Image
                style={styles.offerIcon}
                source={require('../../assets/img/reward.png')}
              />
            </View>
          </Card>

          <Card style={styles.card}>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: phone ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'call-outline'} size={24} color={'#8b16ff'} />
              <TextInput
                style={styles.body}
                placeholder={
                  serviceName === 'DTH'
                    ? 'Enter Customer ID'
                    : serviceName === 'Datacard'
                    ? 'Enter Your DataCard Number'
                    : 'Enter Your 10 Digit Mobile Number'
                }
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                onBlur={() => {}}
              />
            </View>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: amount ? '#8b16ff' : 'gray',
              }}>
              <Icon
                name={'file-tray-full-outline'}
                size={24}
                color={'#8b16ff'}
              />

              <View style={styles.InputWraper}>
                <PickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={operatorData}
                  placeholder={{
                    label: 'Select Oparator',
                    value: null,
                    color: '#9EA0A4',
                  }}
                />
              </View>
            </View>
            {!isBillPay() && (
              <View
                style={{
                  ...styles.phoneInputContainer,
                  borderColor: amount ? '#8b16ff' : 'gray',
                }}>
                <Icon name={'locate-outline'} size={24} color={'#8b16ff'} />
                <View style={styles.InputWraper}>
                  <PickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={cercleData}
                    placeholder={{
                      label: 'Select Circle',
                      value: null,
                      color: '#9EA0A4',
                    }}
                  />
                </View>
              </View>
            )}

            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: amount ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'card-outline'} size={24} color={'#8b16ff'} />
              <TextInput
                style={styles.body}
                placeholder={'Amount'}
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={5}
                onChangeText={(text) => setAmount(text)}
                value={amount}
              />
            </View>
          </Card>
          <View style={styles.loginBtnSection}>
            <View style={styles.loginBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    resetPass();
                  }}>
                  <Text style={styles.loginBtnText}>Submit</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RechargeScreen;
