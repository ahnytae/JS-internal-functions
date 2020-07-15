const toUpperFunc = arg => {
    let result = new Array();
  
    for(let i = 0; i < arg.length; ++i) {
      result[i] = arg[i].charCodeAt();
      if(!(result[i] >= 97 && result[i] <= 122)) {
        return 0;
      }
      result[i] -= 32;
      result[i] = String.fromCharCode(result[i]);
    }
    return result;
  }
  
  const str = "Abc";
  console.log(toUpperFunc(str));