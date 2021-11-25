import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchResult = ({ item, baseUrl, viewDetails }) => {

    //console.log(item.poster_path)
    console.log(`${baseUrl + item.poster_path}`);

    if ((typeof item.id) !== 'undefined') {
        return (
            <TouchableOpacity onPress={() => viewDetails(item.id)}>
                <View>
                    <Image
                        style={styles.poster}
                        source={{ uri: (`${baseUrl + 'w92' + item.poster_path}`) }}
                    />
                    <Text>{item.original_title.length > 10 ? `${item.original_title.substring(0, 10)}... ` : item.original_title}</Text>
                    <Text>{typeof foo !== 'undefined' ? item.release_date.substring(0, 4) : ' - '}</Text>
                </View>
            </TouchableOpacity>
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