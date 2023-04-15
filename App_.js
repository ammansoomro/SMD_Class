import { NavigationContainer } from '@react-navgiation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App_ = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Coutries" options={{ title: "Test" }} />
                <Stack.Screen name="Coutries" options={{ title: "Test" }} />
                <Stack.Screen name="Coutries" options={{ title: "Test" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}






























// COUNTRIES.JS
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

const Countires = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.eatachi.co/api/country');
                const data = await response.json();
                const sortedData = data.sort((a, b) => a.name - b.name);
                setCountries(sortedData);
                setFiltered(sortedData);
                setLoading(false);
            } catch (err) {
                Alert.alert('Error', err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (search == "") {
            setFiltered(countries);
        }

        let output = countries.filter((country) => country.Name.toLowerCase().includes(search.toLowerCase()))
        setFiltered(output);
    }, [search])


    const DisplayCountry = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('cities', { ID: item.CountryName })} >
                <View>
                    <Text> {item.Name} </Text>
                    <Text> {item.CurrencyName} </Text>
                </View>
            </TouchableOpacity>
        )
    }


    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    else {
        return (
            <View>
                <TextInput onChangeText={(e) => setSearch(e)} />
                <FlatList data={filtered} renderItem={DisplayCountry} />
            </View>
        )
    }
}







































const Cities = ({ route }) => {
    const [cities, setCities] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const { Id } = route.params;
        const getData = async () => {
            try {
                const res = await fetch("PAI");
                const data = await res.json();
                setFiltered(data);
                setCities(data);
            }
            catch { }
        }
        getData();
    }, [])

    useEffect(() => {
        if (search == "") {
            setFiltered(cities);
        }
        let output = cities.filter((city) => city.Name.toLowerCase().includes(search.toLowerCase()));
        setFiltered(output);
    }, [search])

    const DisplayCoutry = ({ item, index }) => {
        <TouchableOpacity>
            <View>
                <Text></Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View>
            <TextInput />
            <FlatList data={filtered} renderItem={DisplayCoutry} />
        </View>
    )
}

