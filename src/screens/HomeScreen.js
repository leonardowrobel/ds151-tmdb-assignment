import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import tmdb from '../api/tmdb';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {

    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState([]);

    const search = async (query) => {
        try {
            const response = await tmdb.get('/search/movie', {
                params: {
                    query,
                    include_adult: false
                }
            });
            setResult(response.data.results)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View>
            <SearchBar
                value={ inputText }
                setValue={ (t) => setInputText(t) }
                searchValue={ (t) => search(t) }
            />
            <Text>HomeScreen</Text>
            <Button
                onPress={search('teste')}
                title='teste'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default HomeScreen;