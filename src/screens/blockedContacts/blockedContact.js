import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './blockedContact.styles';
import BlockedContactCard from '../../components/ui/BlockedContactCard';
import {BlockedContactData} from '../../../StaticData/BlockedContact';

const BlockedContactScreen = (props) => {
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
        title={'Blocked Contacts'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={BlockedContactData}
          renderItem={({item}) => (
            <BlockedContactCard
              name={item.name}
              number={item.number}
              rightIconName={'lock'}
              rightIconColor={'red'}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default BlockedContactScreen;
