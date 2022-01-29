export const generateDummyTable = () => {
    const table = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let j = 0; j < 9; j++) {
            row.push({ order: j, disabled: true })
        }
        table.push(row);
    }
    return table;
};

export const generateTable = () => {
    //
}

