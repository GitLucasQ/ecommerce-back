process.on('message', (cant) => {    
    const numbers = generateRandoms(cant);
    process.send(numbers);
    process.exit(1);
})

function generateRandoms(cant) {
    const numbers = [],
        max = 1000;

    for (let i = 0; i < cant; i++) {
        numbers.push(Math.floor(Math.random() * (max - 1)) + 1);
    }
    
    console.log(`${numbers.length} numbers generated`);
    
    const counts = {};
    numbers.forEach(n => {
        counts[n] = (counts[n] || 0) + 1;
    });
    
    return counts;
}