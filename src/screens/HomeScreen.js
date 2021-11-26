import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Switch, Text, View } from 'react-native';
import tmdb from '../api/tmdb';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

const HomeScreen = ({ navigation }) => {

    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState([{}])

    // FILTERS
    const [movieFilter, setMovieFilter] = useState(true)
    const [peopleFilter, setPeopleFilter] = useState(false)
    const [tvFilter, setTvFilter] = useState(false)

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

        const filter = (movieFilter ? 'movie' : peopleFilter ? 'person' : 'tv')

        tmdb.get(`/search/${filter}`, {
            params: {
                query,
                include_adult: false
            }
        }).then((response) => {
            setResult(response.data.results)
        })
    }

    function viewDetails(id) {
        navigation.navigate('Details', { id: id, baseUrl: baseUrl })
        console.log(id)
    }

    function changeFilter(t) {
        console.log('changeFilter')
        switch (t) {
            case 'movies':
                console.log('movies')
                setMovieFilter(true)
                setPeopleFilter(false)
                setTvFilter(false)
                break
            case 'people':
                console.log('people')
                setMovieFilter(false)
                setPeopleFilter(true)
                setTvFilter(false)
                break
            case 'tv':
                console.log('tv')
                setMovieFilter(false)
                setPeopleFilter(false)
                setTvFilter(true)
                break
        }
    }


    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <SearchBar
                value={inputText}
                setValue={(t) => setInputText(t)}
                searchValue={() => search()}
            />
            <Switch
            
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={movieFilter ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(t) => changeFilter('movies')}
                value={movieFilter} />
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={peopleFilter ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(t) => changeFilter('people')}
                value={peopleFilter}
            />
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={tvFilter ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(t) => changeFilter('tv')}
                value={tvFilter}
            />
            <FlatList
                style={styles.list}
                data={result}
                renderItem={({ item }) => <SearchResult item={item} baseUrl={baseUrl} viewDetails={viewDetails} />}
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