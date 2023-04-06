import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 140,
    height: 40,
  },
  tabBarIcon: {
    fontSize: 24,
    color: '#8e8e93',
  },
  tabBarIconFocused: {
    color: '#006600',
  },
});

export default styles;
