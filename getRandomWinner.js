function getRandom() {
    return parseInt(
        (Math.random()*100)
            .toString()
            .slice(0,2)
    );
};

function getWinner(names = ['name 1', 'name 2', '...']) {
    let results = new Array;
    
    names.forEach(name => {
        results.push({ name, score: getRandom() });
    });

    results.sort((a, b) => a.score - b.score).reverse();

    results.forEach(result => {
        console.log(`${result.name} rolled ${result.score}`);
    });
};
