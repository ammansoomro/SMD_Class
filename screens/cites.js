import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/citiesStyle';

const CitiesList = ({ route }) => {
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = cities.filter(city => {
    return city.Name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    const { countryId } = route.params;

    fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`)
      .then(response => {
        return response.json();
      })
      .then(newCities => {
        setCities(newCities);
      })
      .catch(err => Alert.alert('Error', err));
  }, []);

  const displayCity = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={[styles.cityContainer, { backgroundColor: index % 2 === 0 ? '#EFEFEF' : 'white' }]}>
          <Text style={styles.cityName}>{item.Name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Cities for {route.params.countryName}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search cities..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList data={filteredCities} renderItem={displayCity} keyExtractor={item => item.Id.toString()} />
    </View>
  );
};

export default CitiesList;
