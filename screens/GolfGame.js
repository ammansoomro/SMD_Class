import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GolfGame = ({route, navigation }) => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

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
      const selected = await data.results.find((item) => item.id === route.params.gameId);
      setSelected(selected);
    }
    fetchData();
  }, []);



 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Golf Game</Text>
      <View style={styles.details}>
        <Text style={styles.detailText}>ID: {selected.id}</Text>
        <Text style={styles.detailText}>Type: {selected.type}</Text>
        <Text style={styles.detailText}>Status: {selected.status}</Text>
        <Text style={styles.detailText}>Name: {selected.name}</Text>
        <Text style={styles.detailText}>Tour ID: {selected.tour_id}</Text>
        <Text style={styles.detailText}>Country: {selected.country}</Text>
        <Text style={styles.detailText}>Course: {selected.course}</Text>
        <Text style={styles.detailText}>Start Date: {selected.start_date}</Text>
        <Text style={styles.detailText}>End Date: {selected.end_date}</Text>
        <Text style={styles.detailText}>Timezone: {selected.timezone}</Text>
        <Text style={styles.detailText}>Season: {selected.season}</Text>
        <Text style={styles.detailText}>Prize Fund: {selected.prize_fund}</Text>
        <Text style={styles.detailText}>Fund Currency: {selected.fund_currency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A4A4A',
  },
  details: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#4A4A4A',
  },
});

export default GolfGame;