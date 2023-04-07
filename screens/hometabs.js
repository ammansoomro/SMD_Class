import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import CountriesList from './countries';
import Settings from './settings';
import Tab3 from './tab3';
import Tab4 from './tab4';
import styles from './styles/homeStyle';

const Tab = createBottomTabNavigator();

const MyHeader = ({ route }) => {
  return (
    <View style={styles.header}>
      <Image source={{ uri: 'https://khi.nu.edu.pk/wp-content/uploads/2022/05/FAST-NU-logo.png', }} resizeMode="contain" style={styles.logo} />
      <Text>{route.name}</Text>
      <MatIcons name="menu" size={24} />
    </View>
  );
};

const HomeTabs = () => {

  return (
    <Tab.Navigator screenOptions={{ header: (props) => <MyHeader {...props} />, }}>
      <Tab.Screen name="Home" component={CountriesList} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Screen 1" component={Tab3} />
      <Tab.Screen name="Screen 2" component={Tab4} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
