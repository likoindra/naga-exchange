import {Dimensions, StatusBar, StyleSheet} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    // paddingHorizontal: 22,
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: SCREEN_HEIGHT
  },
  containerBar: {
    flexDirection: 'column',
    height: 150,
  },
  rowBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    width: '100%',
  },
  rowHeader: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingLeft: 10,
  },
  images: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  textName: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  textSymbol: {
    color: '#B1B2B2',
  },
  detailHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  textHeader: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  textColumn: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  textMid: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  textFooter: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },

  buttonAction: {
    // borderRadius: 20,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    // backgroundColor: "#000"
    // flex: 1,
    // height: '100%',
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 22,
  },

  buy: {
    // width: '100%',
    flex: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBuy: {
    color: '#fff',
  },

  sell: {
    flex: 1,

    // width: '100%',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSell: {
    color: '#000',
  },
});
