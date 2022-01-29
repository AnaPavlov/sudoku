import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Table from './src/components/Table';
import {generateDummyTable, generateTable} from './src/gameLogic/index';


export default function App() {
    const [gameStatus, setGameStatus] = useState(false);
    const [table, setTable] = useState(generateDummyTable());

    const handleGameStart = () => {
        setGameStatus(true);
        const newTable = generateTable();
        setTable(newTable);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sudoku</Text>
            <View style={styles.tableWrapper}>
                <Table table={table}/>
            </View>
            <Button
                onPress={handleGameStart}
                disabled={gameStatus}
                title="Start new game"
                color="#F97900"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#46301B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    tableWrapper: {
        margin: 15,
    },
});
