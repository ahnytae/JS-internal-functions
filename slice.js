const sliceFunc = (array, begin, end) => {
    let copyArr = array;
    let newArr = new Array();
  
    // pre-condition : begin is undefined
    if (begin === undefined) {
      return copyArr;
    }
  
    // pre-condition : begin > arr length
    if(begin > copyArr.length) {
      return newArr;
    }
  
    // pre-condition : end > arr length
    if(end > copyArr.length) {
      for(let i = 0; i < copyArr.length - begin; ++i) {
        newArr[i] = copyArr[begin + i];
      }
      return newArr;
    }
  
    // case: begin
    if(begin && !end) {
      for(let i = 0; i < copyArr.length - begin; ++i) {
        newArr[i] = copyArr[begin + i];
      }
      return newArr;
    }
  
    // case: begin ~ end 
    if (begin && end) {
      for(let i = 0; i < end - begin; ++i) {
        newArr[i] = copyArr[begin + i];
      }
    }
    return newArr;
  }
  
  const array = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  
  // output
  console.log(sliceFunc(array,1,3));