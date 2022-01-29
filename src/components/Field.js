import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function Field(field) {
    return (
        <View style={styles.border}>
            <Pressable
                style={styles.field}
                disabled={field.disabled}
                onPress={() => console.log(field.order)}>
                <Text style={styles.text}>{field.value}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
        width: 30,
        height: 30,
        alignSelf: "stretch",
        backgroundColor: '#F7F0E0',
    },
    border: {
        backgroundColor: '#302201',
        borderWidth: 1,
    },
    text: {
        fontSize: 22,
    },
});
