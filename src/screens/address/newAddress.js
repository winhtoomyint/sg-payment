import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './newAddress.styles';
import RoundCheckbox from '../../components/ui/roundCheckBox';
import PickerSelect from '../../components/dropDown/dropdown';

const NewAdressScreen = (props) => {
  const [home, setHome] = useState(false);
  const [office, setOffice] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');

  let stateList = [
    {label: 'Aadhar Card', value: 'football'},
    {label: 'PAN Card', value: 'baseball'},
    {label: 'Election Card', value: 'hockey'},
  ];

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'menu'}
        title={'Add New Address'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <View>
          <View style={styles.checkboxContainer}>
            <RoundCheckbox
              checked={home}
              backgroundColor={Colors.Accent}
              size={Scales.moderateScale(23)}
              onValueChange={() => {
                setHome(true), setOffice(false);
              }}
            />
            <Text style={styles.checkboxText}>Home</Text>
            <RoundCheckbox
              checked={office}
              backgroundColor={Colors.Accent}
              size={Scales.moderateScale(23)}
              onValueChange={() => {
                setOffice(true), setHome(false);
              }}
            />
            <Text style={styles.checkboxText}>Office</Text>
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: name ? Colors.Accent : Colors.GRAY,
            }}>
            <TextInput
              placeholder={'Full Name'}
              placeholderTextColor={'#b0b2b5'}
              style={styles.textInput}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: phone ? Colors.Accent : Colors.GRAY,
            }}>
            <TextInput
              placeholder={'Mobile Number'}
              placeholderTextColor={'#b0b2b5'}
              style={styles.textInput}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: address ? Colors.Accent : Colors.GRAY,
            }}>
            <TextInput
              placeholder={'Address'}
              placeholderTextColor={'#b0b2b5'}
              style={styles.textInput}
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: landmark ? Colors.Accent : Colors.GRAY,
            }}>
            <TextInput
              placeholder={'Landmark'}
              placeholderTextColor={'#b0b2b5'}
              style={styles.textInput}
              value={landmark}
              onChangeText={(text) => setLandmark(text)}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: pincode ? Colors.Accent : Colors.GRAY,
            }}>
            <TextInput
              placeholder={'Pincode'}
              placeholderTextColor={'#b0b2b5'}
              style={styles.textInput}
              value={pincode}
              onChangeText={(text) => setPincode(text)}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: pincode ? Colors.Accent : Colors.GRAY,
            }}>
            <PickerSelect
              onValueChange={(value) => console.log(value)}
              items={stateList}
              placeholder={{
                label: 'Select State',
                value: null,
                color: '#9EA0A4',
              }}
            />
          </View>
          <View
            style={{
              ...styles.inputContainer,
              borderColor: pincode ? Colors.Accent : Colors.GRAY,
            }}>
            <PickerSelect
              onValueChange={(value) => console.log(value)}
              items={stateList}
              placeholder={{
                label: 'Select City',
                value: null,
                color: '#9EA0A4',
              }}
            />
          </View>
        </View>
        <View style={styles.bottomBtnContainer}>
          <TouchableOpacity style={styles.bottomBtn} activeOpacity={0.7}>
            <Text style={styles.btnText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView backgroundColor={Colors.Accent} />
    </KeyboardAvoidingView>
  );
};

export default NewAdressScreen;
