import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/countriesStyle';
const CountriesList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://api.eatachi.co/api/country')
      .then(response => {
        return response.json();
      })
      .then(newCountries => {
        setCountries(newCountries);
      })
      .catch(err => Alert.alert('Error', err));
  }, []);

  const displayCountry = (itemObject) => {
    const { index, item } = itemObject;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Cities', { countryId: item.CountryId, countryName: item.Name, })}>
        <View style={[styles.row, { backgroundColor: index % 2 === 0 ? 'blue' : 'green' }]}>
          <Text style={styles.textName}>
            {item.Name}
          </Text>
          <Text style={styles.textCurrency}>
            {item.CurrencyName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={countries} renderItem={displayCountry} />
    </View>
  );

};

export default CountriesList;
