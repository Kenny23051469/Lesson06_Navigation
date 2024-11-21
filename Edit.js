import React, { useState } from "react";
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { datasource } from "./Data.js";

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                style={styles.TextInputStyle}
                value={letter}
                onChangeText={(text) => setLetter(text)}
                maxLength={1}
            />
            <View style={styles.ButtonContainer}>
                <View style={styles.ButtonStyle}>
                    <Button title="Save"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === 'Vowels') {
                                indexnum = 0;
                            }
                            datasource[indexnum].data[route.params.index].key = letter;
                            navigation.navigate('Home');
                        }}
                    />
                </View>

                <View style={styles.ButtonStyle}>
                    <Button title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === 'Vowels') {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{
                                    text: "Yes", onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                    }
                                },
                                { text: "No" }]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    TextInputStyle: {
        borderWidth: 1,
        margin: 10
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ButtonStyle: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default Edit;