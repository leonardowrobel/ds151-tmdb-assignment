import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchResult = ({ item, baseUrl, viewDetails }) => {

    //console.log(item.poster_path)
    //console.log(`${baseUrl + item.poster_path}`);

    //const title = (item.original_title || item.name || item.original_name)

    console.log(item)

    const name = ('original_title' in item) ? item.original_title : ('name' in item ? item.name : item.original_name)
    const imagePath = ('poster_path' in item) ? 'poster_path' : 'profile_path' 

    if ((typeof item.id) !== 'undefined') {
        return (
            <TouchableOpacity onPress={() => viewDetails(item.id)}>
                <View>
                    <Image
                        style={styles.poster}
                        source={{ uri: (`${baseUrl + 'w92' + item[imagePath]}`) }} />
                    <Text>{name.length > 10 ? `${name.substring(0, 10)}... ` : name}</Text>
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