import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/citiesStyle';

const CitiesList = ({ route,navigation }) => {

  // ================= DEFINE STATES =================
  const [cities, setCities] = useState([]);
  const [filteredCities, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  // ================= FETCH DATA =================
  useEffect(() => {
    const { countryId} = route.params;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`);
        const data = await response.json();
        setCities(data);
        setFiltered(data);
      } catch (err) {
        Alert.alert('Error', err);
      }
    };
    fetchData();
  }, []);


  // ================= SEARCH CITIES =================
  useEffect(() => {
    if (search === '') {
      setFiltered(cities);
    }
    const filteredCities = cities.filter((city) => city.Name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(filteredCities);
  }, [search]);


  // ================= DISPLAY CITIES =================
  const displayCity = ({ item, index }) => {

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Countries')}>
        <View style={[styles.cityContainer, { backgroundColor: index % 2 === 0 ? '#EFEFEF' : 'white' }]}>
          <Text style={styles.cityName}>{item.Name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ================= RENDER =================
  return (
    <View style={styles.container}>
        <TextInput placeholder="Search cities..." onChangeText={(e) => setSearch(e)} value={search}/>
        <FlatList data={filteredCities} renderItem={displayCity} />
    </View>
  );
};

export default CitiesList;