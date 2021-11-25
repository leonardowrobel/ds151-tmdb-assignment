import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import tmdb from '../api/tmdb';

const DetailsScreen = ({ route }) => {

    const [movie, setMovie] = useState({})
    const { id, baseUrl } = route.params
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        tmdb.get(`/movie/${id}`)
            .then((response) => {
                setMovie(response.data)
                //console.log(`${baseUrl + 'w185' + poster_path}`)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    } else {
        return (
            <View>
                <Image
                    style={styles.poster}
                    source={{ uri: (`${baseUrl + 'w342' + movie.poster_path}`) }}
                />
                <Text>{movie.original_title}</Text>
                <Text>{movie.release_date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    poster: {
        width: 342,
        height: 513,
    },
})

export default DetailsScreen;