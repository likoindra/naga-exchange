import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderStyle: 'solid',
    backgroundColor: '#DFDFDF',
  },
  text: {
    color: '#707070',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },
  header: {
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#000',
  },
});
