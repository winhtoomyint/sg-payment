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
import styles from './qrCode.styles';

const QRCodeScreen = (props) => {
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
        title={'MY QR Code'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <View style={styles.qrContainer}>
          <Text style={styles.phoneText}> 9133622005</Text>
          <Image
            source={require('../../assets/img/qrcode.png')}
            style={styles.qrImage}
          />
        </View>
        <View style={styles.bottomBtnContainer}>
          <TouchableOpacity style={styles.bottomBtn} activeOpacity={0.7}>
            <Text style={styles.btnText}>SHARE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtn} activeOpacity={0.7}>
            <Text style={styles.btnText}>DOWNLOAD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView backgroundColor={'#FFF'} />
    </View>
  );
};

export default QRCodeScreen;
