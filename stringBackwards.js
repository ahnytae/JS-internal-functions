// String 뒤집기
const strBack = (str) => {
    let newStr = new Array();
    let resultStr = new Array();
  
    // string in array(upside)
    for(let i = 0; i < str.length; ++i) {
      newStr[i] = str[str.length - 1 - i];
    }
  
    // array to string
    for(let i = 0; i < newStr.length; ++i) {
      resultStr += newStr[i];
    }
    return resultStr;
  }
  
  const str = "Hello my name is Ahny";
  console.log(strBack(str));
  
  