// indexOf
const indexOfFunc = (src, str) => {
    let i = 0;
    for(let i = 0; i < src.length; ++i) {
      for(let j = 0; j < str.length; ++j) {
        if(src[i] === str[j]) {
          return i;
        }
      }
    }
    return -1;
  }
  
  const src = "Hallo ahny!";
  const str = "ahny";
  
  console.log(indexOfFunc(src,str));