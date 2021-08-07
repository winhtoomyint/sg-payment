import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import UPIIDTile from '../../components/ui/UPIIDTile';
import {Scales, Colors} from '@common';
import styles from './upiId.styles';

const UPIIDScreen = (props) => {
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
        title={'BHIM UPI ID'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <View>
          <UPIIDTile />
        </View>
        <View style={styles.bottomBtnContainer}>
          <TouchableOpacity style={styles.bottomBtn} activeOpacity={0.7}>
            <Text style={styles.btnText}>ADD NEW BHIM UPI ID</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView backgroundColor={Colors.Accent} />
    </View>
  );
};

export default UPIIDScreen;
