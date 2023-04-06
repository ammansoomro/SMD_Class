import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './styles/countriesStyle';

const CountriesList = ({ navigation }) => {

  // ================= DEFINE STATES =================
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // ================= FETCH DATA =================
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.eatachi.co/api/country');
        const data = await response.json();
        setCountries(data);
        setFiltered(data);
      } catch (error) {
        Alert.alert('Error', error);
      }
    }
    fetchData();
  }, []);


  // ================= SEARCH COUNTRIES =================
  useEffect(() => {
    if (search === "") {
      setFiltered(countries);
    }
    const fiteredCountries = countries.filter((country) => country.Name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(fiteredCountries);
  }, [search])


  // ================= DISPLAY COUNTRIES =================
  const displayCountry = ({ index, item }) => {
    const backgroundColor = index % 2 === 0 ? 'blue' : 'green';
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Cities', { countryId: item.CountryId, countryName: item.Name })}>
        <View style={{ ...styles.row, backgroundColor }}>
          <Text style={styles.textName}>{item.Name}</Text>
          <Text style={styles.textCurrency}>{item.CurrencyName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ================= RENDER =================
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search Country...'
        onChangeText={(e) => setSearch(e)}
        value={search}
      />
      <FlatList data={filteredCountries} renderItem={displayCountry} />
    </View>
  );
};

export default CountriesList;