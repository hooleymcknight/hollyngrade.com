const { readFile } = require("fs/promises");

const read = async () => {
    const data = JSON.parse(await readFile('./az_2026.json', 'utf8'));
    console.log((data.days.map(x => x.games_played).flat()).filter(y => { return y.trim() != ''; }))

}

read();