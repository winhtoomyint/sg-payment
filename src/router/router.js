import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Scales} from '@common';
import drawerContentComponents from '../components/drawerComponent';

import LoadingScreen from '../screens/loading/loading';
import IntroScreen from '../screens/intro/intro';
import SignInScreen from '../screens/signIn/signIn';
import SignUpScreen from '../screens/signUp/signUp';
import ForgotPassScreen from '../screens/forgotPass/forgotPass';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import AuthCheckScreen from '../screens/authCheck/authCheck';
import QRCodeScreen from '../screens/qrCode/qrCode';
import UPIIDScreen from '../screens/upiId/upiId';
import AdressScreen from '../screens/address/address';
import NewAdressScreen from '../screens/address/newAddress';
import MyOrderScreen from '../screens/myOrder/myOrder';
import BillNotificationScreen from '../screens/billNotification/billNotification';
import TransactionHistoryScreen from '../screens/transactionHistory/transactionHistory';
import BlockedContactScreen from '../screens/blockedContacts/blockedContact';
import ChangePasswordScreen from '../screens/changePassword/changePassword';
import PoliciesScreen from '../screens/policies/policies';
import LanguageScreen from '../screens/language/language';
import SupportScreen from '../screens/support/support';
import KycScreen from '../screens/profile/kyc';
import RechargeScreen from '../screens/rechargeBill/rechargeBill';
import SendToContact from '../screens/upiSendContact/upiSendContact';

const LoadingNavigator = createStackNavigator({
  Loading: {screen: LoadingScreen, navigationOptions: {headerShown: false}},
});

const AuthCheckNavigator = createStackNavigator({
  AuthCheck: {
    screen: AuthCheckScreen,
    navigationOptions: {headerShown: false},
  },
});

const IntroNavigator = createStackNavigator({
  Intro: {screen: IntroScreen, navigationOptions: {headerShown: false}},
});

const AuthNavigator = createStackNavigator({
  SignIn: {screen: SignInScreen, navigationOptions: {headerShown: false}},
  SignUp: {screen: SignUpScreen, navigationOptions: {headerShown: false}},
  Forgot: {screen: ForgotPassScreen, navigationOptions: {headerShown: false}},
});

const ProfileNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen, navigationOptions: {headerShown: false}},
  Kyc: {screen: KycScreen, navigationOptions: {headerShown: false}},
});

const HomeNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  Recharge: {screen: RechargeScreen, navigationOptions: {headerShown: false}},
  SendToContact: {
    screen: SendToContact,
    navigationOptions: {headerShown: false},
  },
});

const QRCodeNavigator = createStackNavigator({
  QRCode: {screen: QRCodeScreen, navigationOptions: {headerShown: false}},
});
const UPIIDNavigator = createStackNavigator({
  UPIID: {screen: UPIIDScreen, navigationOptions: {headerShown: false}},
});
const AdressNavigator = createStackNavigator({
  Adress: {screen: AdressScreen, navigationOptions: {headerShown: false}},
  NewAdress: {screen: NewAdressScreen, navigationOptions: {headerShown: false}},
});
const MyOrderNavigator = createStackNavigator({
  MyOrder: {screen: MyOrderScreen, navigationOptions: {headerShown: false}},
});
const BillNotificationNavigator = createStackNavigator({
  BillNotification: {
    screen: BillNotificationScreen,
    navigationOptions: {headerShown: false},
  },
});
const TransactionHistoryNavigator = createStackNavigator({
  TransactionHistoryScreen: {
    screen: TransactionHistoryScreen,
    navigationOptions: {headerShown: false},
  },
});
const BlockedContactNavigator = createStackNavigator({
  BlockedContact: {
    screen: BlockedContactScreen,
    navigationOptions: {headerShown: false},
  },
});
const ChangePasswordNavigator = createStackNavigator({
  ChangePassword: {
    screen: ChangePasswordScreen,
    navigationOptions: {headerShown: false},
  },
});
const PoliciesNavigator = createStackNavigator({
  Policies: {
    screen: PoliciesScreen,
    navigationOptions: {headerShown: false},
  },
});
const LanguageNavigator = createStackNavigator({
  Language: {screen: LanguageScreen, navigationOptions: {headerShown: false}},
});
const SupportNavigator = createStackNavigator({
  Support: {screen: SupportScreen, navigationOptions: {headerShown: false}},
});

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({tintColor}) => (
          <Icon
            name={'ios-home'}
            size={Scales.moderateScale(23)}
            color={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'heart'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    QRCode: {
      screen: QRCodeNavigator,
      navigationOptions: {
        title: 'My QR Code',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'qr-code-outline'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    UPIID: {
      screen: UPIIDNavigator,
      navigationOptions: {
        title: 'My BHIM UPI ID',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-at'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    Adress: {
      screen: AdressNavigator,
      navigationOptions: {
        title: 'My Addresses',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-pin'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    MyOrder: {
      screen: MyOrderNavigator,
      navigationOptions: {
        title: 'My Order',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-cart'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    BillNotification: {
      screen: BillNotificationNavigator,
      navigationOptions: {
        title: 'Bill Notifications',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-card'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    TransactionHistory: {
      screen: TransactionHistoryNavigator,
      navigationOptions: {
        title: 'Transaction History',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-swap'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    BlockedContact: {
      screen: BlockedContactNavigator,
      navigationOptions: {
        title: 'Blocked Contacts',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-close-circle-outline'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    ChangePassword: {
      screen: ChangePasswordNavigator,
      navigationOptions: {
        title: 'Change Password',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-lock'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    Policies: {
      screen: PoliciesNavigator,
      navigationOptions: {
        title: 'Policies',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-paper'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    Language: {
      screen: LanguageNavigator,
      navigationOptions: {
        title: 'Choose Language',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-globe'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    Support: {
      screen: SupportNavigator,
      navigationOptions: {
        title: 'Support',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-globe'}
            size={Scales.moderateScale(23)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
  },

  {
    contentComponent: drawerContentComponents,
    backBehavior: 'initialRoute',
    drawerType: 'front',
    drawerWidth: Scales.deviceWidth * 0.6,
    drawerBackgroundColor: Colors.WHITE,
    contentOptions: {
      activeTintColor: Colors.Accent,
      inactiveTintColor: Colors.TRANSPARENT_BLACK8,
      labelStyle: {
        fontSize: Scales.moderateScale(14),
      },
      iconContainerStyle: {
        hight: Scales.moderateScale(26),
        width: Scales.moderateScale(26),
        marginRight: 0,
      },
      itemsContainerStyle: {
        marginTop:
          Platform.OS === 'android'
            ? Scales.deviceHeight * 0.06
            : Scales.deviceHeight * 0.01,
      },
      itemStyle: {
        borderBottomWidth: 2,
        borderColor: Colors.TRANSPARENT_BLACK1,
      },

      activeBackgroundColor: Colors.TRANSPARENT_BLACK1,
      //inactiveBackgroundColor: '#red',
    },
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingNavigator,
    AuthCheck: AuthCheckNavigator,
    Intro: IntroNavigator,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(RootNavigator);
