import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CricketGame = ({ route, navigation }) => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

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

      const selected = await data.results.find((item) => item.id === route.params.gameId);
      setSelected(selected);
    }
    fetchData();
  }, []);

  const styles = StyleSheet.create({
    details: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      margin: 10,
      padding: 10,
      backgroundColor: '#f9f9f9'
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 5
    },
    detailLabel: {
      fontWeight: 'bold'
    },
    detailValue: {
      flex: 1,
      marginLeft: 10
    }
  });

  // ================= RENDER =================
  return (
    <View style={styles.details}>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>ID:</Text>
        <Text style={styles.detailValue}>{selected.id}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Series ID:</Text>
        <Text style={styles.detailValue}>{selected.series_id}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Venue:</Text>
        <Text style={styles.detailValue}>{selected.venue}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailValue}>{selected.date}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detailValue}>{selected.status}</Text>
      </View>
    </View>
  );


};

export default CricketGame;
