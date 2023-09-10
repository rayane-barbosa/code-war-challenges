function isIsogram(str){
    let strArr = str.toLowerCase().split('');
    let strSet = new Set(strArr);
    return strArr.length === strSet.size;
}

console.log(isIsogram("Dermatoglyphics"));