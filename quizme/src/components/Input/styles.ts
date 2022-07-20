import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  input: {
    width: '76%',
    height: 55,
    borderRadius: 9,
    backgroundColor: '#F1F6FB',
    fontFamily: 'YanoneKaffeesatz-Regular',
    fontSize: 20,
    paddingLeft: '5%',
  },
  disabledInput: {
    width: '76%',
    height: 55,
    paddingLeft: '5%',
    borderBottomWidth: 1,
    borderRadius: 9,
    backgroundColor: '#F1F3F4',
    fontFamily: 'YanoneKaffeesatz-Regular',
    fontSize: 20,
  },
  label: {
    fontSize: 19,
    color: '#020A32',
    alignSelf: 'flex-start',
    fontFamily: 'YanoneKaffeesatz-Regular',
  },
  validation: {
    width: '76%',
    borderBottomWidth: 1,
    borderBottomColor: '#939399',
    fontSize: 16,
    color: '#1A0A5C',
  },
  error: {
    color: '#DE262F',
    fontSize: 15,
    marginTop: '1%',
    fontFamily: 'YanoneKaffeesatz-Regular',
  },
});
