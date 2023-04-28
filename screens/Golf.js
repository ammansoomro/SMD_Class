import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';

const Golf = ({ navigation }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b3158c0591msh0d0bf2690612a3cp1ce9d4jsn17e1a317ea3f',
        'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
      }
    };
    const fetchData = async () => {
      const response = await fetch('https://golf-leaderboard-data.p.rapidapi.com/fixtures/2/2021', options)
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, []);

  // ================= DISPLAY COUNTRIES =================
  const displayCountry = ({ index, item }) => {
    const backgroundColor = index % 2 === 0 ? 'blue' : 'green';
    return (
      <TouchableOpacity onPress={() => navigation.navigate('GolfGame', { gameId: item.id })}>
             <View style={styles.countryContainer}>
          <Text style={styles.countryId}> {item.country} </Text>
          <Text style={styles.countryVenue}> {item.fund_currency} </Text>
        </View>
      </TouchableOpacity>
    );
  };


  // ================= RENDER =================
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Golf Matches</Text>
    <FlatList data={data} renderItem={displayCountry} />
  </View>
  );


};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  countryContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  countryId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryVenue: {
    fontSize: 16,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008000',
  },
});

export default Golf;