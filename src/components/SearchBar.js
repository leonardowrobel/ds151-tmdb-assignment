import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ value, setValue, searchValue }) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                onChangeText={setValue}
                value={value}
            />
            <br/>
            <Button
                title='Pesquisar'
                onPress={searchValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        
        padding: 5,
        marginBottom: 10
    },
    textInput: {
        padding: 5,
        backgroundColor: '#dddddd'
    }
});

export default SearchBar;