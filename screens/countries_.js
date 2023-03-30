import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const CountriesList = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://api.eatachi.co/api/country').then(response => { return response.json() }).then(
            newCountires => {
                setCountries(newCountires);
            }
        ).
            catch(err => console.log(err));
    }, []);

    const displayCountry = (itemObject) => {
        const { index, item } = itemObject;
        return (

            <TouchableOpacity onPress={() => navigation.navigate('Cities', { countryId: item.CountryId, countryName: item.Name, })} >
                <View>
                    <Text>
                        {item.Name}
                    </Text>
                    <Text>
                        {item.CurrencyName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList data={countries} renderItem={displayCountry} />
        </View>
    )


}

export default CountriesList;