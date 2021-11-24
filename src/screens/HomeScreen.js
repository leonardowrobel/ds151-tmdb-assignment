import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import tmdb from '../api/tmdb';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const HomeScreen = ({ navigation }) => {

    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState([{}])

    const [baseUrl, setBaseUrl] = useState('')

    useEffect(() => {
        tmdb.get('/configuration')
            .then((response) => {
                setBaseUrl(response.data.images.base_url)
                console.log(response)
            })
    }, [])

    function search() {
        const query = inputText;

        tmdb.get('/search/movie', {
            params: {
                query,
                include_adult: false
            }
        }).then((response) => {
            setResult(response.data.results)
        })
    }



    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <SearchBar
                value={inputText}
                setValue={(t) => setInputText(t)}
                searchValue={() => search()}
            />
            <FlatList
                style={styles.list}
                data={result}
                renderItem={({item}) => <SearchResult item={item} baseUrl={baseUrl} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        margin: 5
    }
});

export default HomeScreen;