function chromosomeCheck(sperm){
    test = sperm.toUpperCase();
    if(test == 'XX'){
        return 'Congratulations! You\'re going to have a daughter.'
    } else if(test == 'XY'){
        return 'Congratulations! You\'re going to have a son.'
    } else {
        return "Something went wrong. Please try again."        
    }
    
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));
console.log(chromosomeCheck('YX'));
console.log(chromosomeCheck('XXY'));
console.log(chromosomeCheck('YY'));
console.log(chromosomeCheck('XXYY'));