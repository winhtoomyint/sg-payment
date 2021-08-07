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
  ActivityIndicator,
} from 'react-native';
import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './myOrder.styles';
import OrderCard from '../../components/ui/orderCard';
import {OrderData} from '../../../StaticData/orderData';

const MyOrderScreen = (props) => {
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
        title={'My Orders'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={OrderData}
          renderItem={({item}) => (
            <OrderCard
              type={item.type}
              name={item.name}
              desc={item.desc}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  );
};

export default MyOrderScreen;
