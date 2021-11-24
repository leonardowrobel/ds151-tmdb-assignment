import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SearchResult = ({ item, baseUrl }) => {

    //console.log(item.poster_path)
    console.log(`${baseUrl + item.poster_path}`);

    if ((typeof item.id) !== 'undefined') {
        return (
            <View>
                <Image
                    style={styles.poster}
                    source={{ uri: (`${baseUrl + 'w92' + item.poster_path}`) }}
                />
                <Text>{item.original_title.length > 10 ? `${item.original_title.substring(0, 10)}... ` : item.original_title}</Text>
                <Text>{item.release_date.substring(0, 4)}</Text>
            </View>
        )
    } else {
        return (
            <Text>Lista vazia.</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    poster: {
        width: 98,
        height: 138,
    },
})

export default SearchResult