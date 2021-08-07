import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: Colors.Accent,
    width: Scales.deviceWidth,
    height: 50,
  },
  btnText: {
    fontSize: Scales.moderateScale(17),
    color: Colors.WHITE,
    fontWeight: '700',
  },
});
