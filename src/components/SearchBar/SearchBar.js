import React from "react";
import styles from "./SearchBar.styles";
import { TextInput, View } from "react-native";

const SearchBar = props => {
    
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Search..."
            style={styles.textInput}
            placeholderTextColor={'aliceblue'}
            onChangeText={props.handleSearch}
            />
        </View>
    )
}

export default SearchBar