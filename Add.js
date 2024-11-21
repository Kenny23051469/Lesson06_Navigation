import React, { useState } from "react";
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from "./Data.js";

const Add = ( {navigation} ) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');
    
    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                style={styles.TextInputStyle}
                value={letter}
                onChangeText={(text) => setLetter(text)}
                maxLength={1}
            />

            <RNPickerSelect
                value={type}
                onValueChange={(type) => setType(type)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' }
                ]}
            />

            <Button title="Submit"
                onPress={() => {
                    let item = { key: letter };
                    let indexnum = 1;
                    if (type === 'Vowels') {
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                    }
                }
            />
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
});

export default Add;