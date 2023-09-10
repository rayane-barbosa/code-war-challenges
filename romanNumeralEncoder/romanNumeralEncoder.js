function solution(number) {
    //convert the number to a roman numeral
    let roman = "";
    const romanNumList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let a;
    if (number < 1 || number > 3999) {
      return "Enter a number between 1 and 3999";
    } else {
      for (let key in romanNumList) {
        a = Math.floor(number / romanNumList[key]);
        if (a >= 0) {
          for (let i = 0; i < a; i++) {
            roman += key;
            number -= romanNumList[key];
          }
        }
      }
    }
    return roman;
  }
  
  const x = 893;
  console.log(x);
  console.log(solution(x));
  console.log(x);