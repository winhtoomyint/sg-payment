import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './address.styles';
import AddressTile from '../../components/ui/addressTile';

const AdressScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'menu'}
        title={'Saved Address'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <View>
          <AddressTile />
        </View>
        <View style={styles.bottomBtnContainer}>
          <TouchableOpacity
            style={styles.bottomBtn}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('NewAdress')}>
            <Text style={styles.btnText}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView backgroundColor={Colors.Accent} />
    </View>
  );
};

export default AdressScreen;
