import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCurrency: {
    color: 'white',
  },
  row: {
  height: 60,
  borderBottomWidth: 3,
  borderBottomColor: 'black',
  padding: 8,
  flexDirection: 'row',
  justifyContent: 'space-between',
  }
});


export default styles;