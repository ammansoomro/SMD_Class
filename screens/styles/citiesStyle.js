import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
    padding: 8,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 8,
    padding: 8,
  },
  cityContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 8,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
