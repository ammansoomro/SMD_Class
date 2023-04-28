import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab3 from './Golf';
import Tab4 from './Cricket';
import styles from './styles/homeStyle';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const tabBarIcon = (name, focused) => (<MatIcons name={name} style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]} />);

  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        name="Golf"
        component={Tab3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="soccer-ball-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cricket"
        component={Tab4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatIcons name="sports-cricket" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default HomeTabs;
