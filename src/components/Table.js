import React from 'react';
import {StyleSheet, View} from 'react-native';
import SquareGrid from "react-native-square-grid";
import Field from './Field';

export default function Table({table}) {
    return (
        <View style={styles.container}>
            {table.map((square, index) => {
                return (
                    <View style={styles.square} key={index}>
                        <SquareGrid columns={3} rows={3} items={square} renderItem={renderField}/>
                    </View>
                );
            })}
        </View>
    );
}

function renderField(item) {
    return (
        <Field field={item} key={item.order} />
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: '#302201',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-around',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#302201',
    },
});
