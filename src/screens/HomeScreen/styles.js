import {Dimensions, StatusBar, StyleSheet} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  wrapperSearch: {
    width: '100%',
  },

  top: {
    height: '20%',
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: '18%',
    left: '-70%',
    backgroundColor: 'rgba(249, 0, 254, 0.31)',
    // backgroundColor: 'rgba(255, 255, 254, 255, 0.8)',
    width: 352,
    height: 352,
    borderRadius: 352,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    height: '20%',
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: '5%',
    right: '-60%',
    backgroundColor: '#4ECDC4',
    // backgroundColor: 'rgba(255, 255, 254, 255, 0.8)',
    width: 352,
    height: 352,
    borderRadius: 352,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: '#fff',
  },

  circleShapeViewTop: {
    position: 'absolute',
    top: '18%',
    left: '-80%',
    width: Dimensions.get('window').height / 3,
    height: Dimensions.get('window').height / 3,
    borderRadius: Dimensions.get('window').height / 2,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    width: 352,
    height: 352,
    transform: [{rotate: '50deg'}],
  },

  circleShapeViewBottom: {
    position: 'absolute',
    bottom: '5%',
    right: '-60%',
    width: Dimensions.get('window').height / 3,
    height: Dimensions.get('window').height / 3,
    borderRadius: Dimensions.get('window').height / 2,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    width: 352,
    height: 352,
    transform: [{rotate: '50deg'}],
  },

  containerCard: {
    flexDirection: 'column',
    // flex: 1,
    paddingBottom: 8,
    paddingHorizontal: 15,
  },
  contentCard: {
    // width: "100%",
    borderRadius: 12,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: 'rgba(240, 240, 240, 0.40)',
    // backdropFilter: 'blur(40px)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapperImage : {
    paddingBottom: 20,

  },
  images: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
    flex: 1
  },
  textContent: {
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 6,
    flex: 1,
  },
  textHeader: {
    color: '#6E7499',
    fontFamily: 'Poppins-Regular',
  },
  textMid: {
    color: '#605757',
    fontFamily: 'Poppins-Regular',
  },
  textFooter: {
    color: '#24A959',
    fontFamily: 'Poppins-Regular',
  },
  buttonCard: {
    backgroundColor: '#F35242',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
  },

  buttonCardGreen: {
    backgroundColor: '#24A959',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
  },
  textChange: {
    color: '#fff',
  },
  contentStyle: {
    paddingBottom: 150,
  },
});
