import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImageSlider from '../../components/imageSlider/imageSlider';
import CustomHeader from '../../components/ui/CustomHeader';
import Card from '../../components/ui/Card';
import ContactTile from '../../components/ui/ContactTile';
import ServiceTile from '../../components/ui/ServiceTile';
import {Colors, Scales} from '@common';
import styles from './home.styles';
import UPICard from '../../components/ui/UPICard';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from '../../components/collapsible/collapsible';
import QRCodeScanner from 'react-native-qrcode-scanner';

const HomeScreen = (props) => {
  const recentContact = useSelector((state) => state.HomeData.recentContact);
  const services = useSelector((state) => state.HomeData.services);
  const [showUPI, setShowUPI] = useState(true);
  const [showQR, setShowQR] = useState(false);

  const onServicePress = (item) => {
    console.log(item);
    if (
      item.name === 'Prepaid' ||
      item.name === 'Postpaid' ||
      item.name === 'DTH' ||
      item.name === 'Datacard' ||
      item.name === 'Gas' ||
      item.name === 'Power Bill'
    ) {
      props.navigation.navigate('Recharge', {
        serviceName: item.name,
      });
    } else {
      // to do
    }
  };

  const navigateToContact = (e) => {
    props.navigation.navigate('SendToContact');
  };

  const onSuccess = (e) => {
    console.log(e.data);
    setShowQR(false);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <CustomHeader
        iconLeft={'menu'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
        onQRPress={() => {
          setShowQR(true);
        }}
        onBellPress={() => {
          props.navigation.navigate('BillNotification');
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated
        visible={showQR}
        onRequestClose={() => {
          setShowQR(false);
        }}>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                padding: 10,
              }}
              onPress={() => {
                setShowQR(false);
              }}>
              <Icon
                name={'close-circle-outline'}
                size={40}
                color={Colors.WHITE}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <QRCodeScanner onRead={onSuccess} fadeIn={false} showMarker={true} />
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.bannerCard}>
            <View style={styles.bannertextContainer}>
              <Text style={styles.bannertext}>Instant Money Transfer</Text>
            </View>
            <View style={styles.bannerImgContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setShowUPI(!showUPI);
                }}>
                <Image
                  style={styles.upiBanner}
                  source={require('../../assets/img/upi.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setShowUPI(!showUPI);
                }}>
                <Image
                  style={styles.aepsBanner}
                  source={require('../../assets/img/aeps.png')}
                />
              </TouchableOpacity>
            </View>
          </Card>
          <Collapsible collapsed={showUPI} easing={'exp'}>
            <View style={styles.collapsedCard}>
              <UPICard
                onContactPress={() => {
                  navigateToContact();
                }}
              />
            </View>
          </Collapsible>
          <View style={styles.slideContainer}>
            <ImageSlider />
          </View>
          <Card style={styles.bannerCard}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={recentContact}
              renderItem={({item}) => (
                <ContactTile name={item.name} avtar={item.avtar} />
              )}
              keyExtractor={(item) => item.name}
            />
          </Card>
          <Card style={styles.serviceCard}>
            <View style={styles.bannertextContainer}>
              <Text style={styles.bannertext}>Our Services</Text>
            </View>
            {/* {services.map((item, index) => (
              <ServiceTile name={item.name} avtar={item.avtar} />
            ))} */}
            <FlatList
              showsHorizontalScrollIndicator={false}
              numColumns={5}
              // horizontal={true}
              data={services}
              renderItem={({item}) => (
                <ServiceTile
                  name={item.name}
                  avtar={item.avtar}
                  onItemPress={() => {
                    onServicePress(item);
                  }}
                />
              )}
              keyExtractor={(item) => item.name}
            />
          </Card>
          <Card style={styles.promoCard}>
            <View style={styles.promoInnerCard}>
              <View style={styles.bannertextContainer}>
                <Text style={styles.bannertext}>Promotions</Text>
              </View>
              <View style={styles.promoContainer}>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/reward.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>View My</Text>
                    <Text style={styles.promoText}>Rewards</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoMiddleContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/offer.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>View My</Text>
                    <Text style={styles.promoText}>Offers</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/refer.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>View My</Text>
                    <Text style={styles.promoText}>Referral Earn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
