function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array; 
}

function xpCalc(pokeArr) {
    return pokeArr.map(p => p.base_experience).reduce((a, b) => a + b);
}

export {shuffleArray, xpCalc};