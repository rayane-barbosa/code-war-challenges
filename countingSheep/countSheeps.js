function countSheeps(sheep){
    let totalSheeps = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            totalSheeps++;
        }
    }
    return totalSheeps;
}

console.log(countSheeps([true,  true,  true,  false, true]));