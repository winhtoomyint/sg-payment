import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  checkboxContainer: {
    flexDirection: 'row',
    height: Scales.deviceHeight * 0.03,
    width: Scales.deviceWidth * 0.95,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Scales.deviceHeight * 0.02,
    marginLeft: 5,
  },
  checkboxText: {
    marginRight: 30,
    marginLeft: 5,
    fontSize: Scales.moderateScale(15),
    color: Colors.GRAY,
  },
  inputContainer: {
    width: Scales.deviceWidth * 0.95,
    height: Scales.deviceHeight * 0.07,
    borderBottomWidth: 1,
    borderColor: Colors.Accent,
    overflow: 'hidden',
    alignSelf: 'center',
    // marginTop: Scales.deviceHeight * 0.01,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: Scales.moderateScale(14),
    paddingLeft: 10,
    marginBottom: -5,
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth,
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    width: Scales.deviceWidth,
    height: 50,
    // position: 'absolute',
    bottom: 0,
  },
  btnText: {
    fontSize: Scales.moderateScale(17),
    color: Colors.WHITE,
    fontWeight: '700',
  },
});
