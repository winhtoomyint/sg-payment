import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  phoneText: {
    fontSize: Scales.moderateScale(28),
    fontWeight: '700',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  qrImage: {
    width: Scales.moderateScale(200),
    height: Scales.moderateScale(200),
  },
  qrContainer: {
    alignItems: 'center',
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth,
    bottom: 0,
    position: 'absolute',
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 1,
    borderColor: Colors.TRANSPARENT_BLACK2,
    width: Scales.deviceWidth / 2,
    height: 50,
  },
  btnText: {
    fontSize: Scales.moderateScale(17),
    color: Colors.BLUE,
  },
});
