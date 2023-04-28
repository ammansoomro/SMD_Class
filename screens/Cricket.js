import { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';

const Cricket = ({ navigation }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'adcc6a18b2mshc6d182d36303b9ap18a1dbjsn2ff7166d3122',
          'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
        }
      };
      const response = await fetch("https://cricket-live-data.p.rapidapi.com/fixtures", options);
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, []);

  // ================= DISPLAY COUNTRIES =================
  const displayCountry = ({ index, item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CricketGame', { gameId: item.id })}>
        <View style={styles.countryContainer}>
          <Text style={styles.countryVenue}> {item.venue} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ================= RENDER =================
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cricket Matches</Text>
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

export default Cricket;
