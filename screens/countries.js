import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './styles/countriesStyle';
const CountriesList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    if (query === "") {
      setFiltered(countries);
    }
    let fiteredCountries = countries.filter((country) => country.Name.toLowerCase().includes(query.toLowerCase()));
    setFiltered(fiteredCountries);
  }, [query])

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

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search Country...'
        onChangeText={(e) => setQuery(e)}
        value={query}
      />
      <FlatList data={filtered} renderItem={displayCountry} />
    </View>
  );
};

export default CountriesList;