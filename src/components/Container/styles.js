import {StyleSheet, Platform, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: (BG, ROW) => ({
    // flex: 1,
    backgroundColor: BG ? BG : null,
    flexDirection: ROW ? 'row' : 'column',
  }),
});
