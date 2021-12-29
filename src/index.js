module.exports = function toReadable (number) {
    let zeroTwelve = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let thirteenNineteen = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number <= 12){
      return zeroTwelve[number];
    }
    else if (number >= 13 && number <= 19){
      return thirteenNineteen[number - 13];
    }
    else if (number >= 20 && number <= 99){
      if (number.toString().endsWith('0')){
        return twentyNinety[+number.toString()[0] - 2];
      }
      return twentyNinety[+number.toString()[0] - 2] + ' ' + zeroTwelve[+number.toString()[1]];
    }
    else if (number >=100 && number <= 999){
      if (number.toString().endsWith('00')){
        return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred';
      }
      else if (number.toString().endsWith('0')){
        if (number.toString().endsWith('10')){
          return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + zeroTwelve[+(number.toString()[1] + number.toString()[2])];
        }
        return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + twentyNinety[+number.toString()[1] - 2];
      }
      else if (number.toString().endsWith('11') || number.toString().endsWith('12')){
        return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + zeroTwelve[+(number.toString()[1] + number.toString()[2])];
      }
      else if (number.toString()[1] === '0'){
        return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + zeroTwelve[+number.toString()[2]];
      }
      else if (number.toString()[1] === '1' && +number.toString()[2] >= 3 && +number.toString()[2] <= 9){
        return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + thirteenNineteen[+(number.toString()[1] + number.toString()[2])-13];
      }
      return zeroTwelve[+number.toString()[0]] + ' ' + 'hundred' + ' ' + twentyNinety[+number.toString()[1] - 2] + ' ' + zeroTwelve[+number.toString()[2]];
    }
}
