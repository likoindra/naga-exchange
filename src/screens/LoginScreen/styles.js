import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 75,
  },
  textLogin: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    color: '#000',
  },

  form: {
    flexDirection: 'column',
    gap: 16,
  },

  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  input: {
    width: 180,
    color: '#000',
  },

  value: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonAction: {
    backgroundColor: '#A172FB',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 35,
  },

  disabled: {
    backgroundColor: '#00000066',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 35,
  },

  textButton: {
    color: '#fff',
  },
});
