const concatFunc = (...arr) => {
    const newArr = new Array();
    for(let i = 0; i < arr.length; ++i) {
      newArr[i] += arr[i];
    }
    return newArr;
  }
  
  const array = [1,2,3,4,5,'a','b'];
  const array1 = [1,2,3,4,5,'c','D'];
  
  console.log(concatFunc(array,array1));