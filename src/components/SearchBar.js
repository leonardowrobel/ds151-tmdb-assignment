import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ value, setValue, searchValue }) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                onChangeText={setValue}
                onEndEditing={searchValue}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        height: 30
    },
    textInput: {
        flex: 1,
        padding: 5,
        backgroundColor: '#dddddd'
    }
});

export default SearchBar;