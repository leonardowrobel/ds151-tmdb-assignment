import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import tmdb from '../api/tmdb';

const DetailsScreen = ({ route }) => {

    const [data, setData] = useState({})
    const { id, baseUrl, dataType } = route.params
    const [loading, setLoading] = useState(true)
    const [dataAccess, setDataAccess] = useState({ pic: '', name: '', year: '' })

    console.log('dataType ' + dataType)

    useEffect(() => {
        tmdb.get(`/${dataType}/${id}`)
            .then((response) => {
                setData(response.data)
                switch (dataType) {
                    case 'movie':
                        setDataAccess({
                            pic: 'poster_path',
                            name: 'original_title',
                            year: 'release_date'
                        })
                        break
                    case 'person':
                        setDataAccess({
                            pic: 'profile_path',
                            name: 'name',
                            year: 'birthday'
                        })
                        break
                    case 'tv':
                        setDataAccess({
                            pic: 'poster_path',
                            name: 'name',
                            year: 'first_air_date'
                        })
                        break
                }
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
                    source={{ uri: (`${baseUrl + 'w342' + data[dataAccess.pic]}`) }}
                />
                <Text>{data[dataAccess.name]}</Text>
                <Text>{data[dataAccess.year]}</Text>
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