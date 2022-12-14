/*Adicione seu codigo abaixo */

let arr = [0, 1, 2, 3, 4];


// ---------------------------------------
// MÉTODO MAP))
function callbackmap(currentValue) {
  return currentValue * 2;
}
function methodmap(arr,callback){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    const value = arr[i]
    result.push((callback(value, i, arr)));
  }
  return result;
}
console.log(methodmap(arr,callbackmap))


// ---------------------------------------
// MÉTODO FILTER))
function callbackfilter(currentValue) {
  return currentValue > 2
}
function methodFilter(arr, callback){
const result =[]
for (let i = 0; i < arr.length; i++) {
  const value = arr[i]
  if((callback(value, i, arr))){
    result.push(value)
  }
}
  return result
}
console.log(methodFilter(arr,callbackfilter))


// ---------------------------------------
// MÉTODO REDUCE))
function callbackreduce(cont, value) {
  return (cont += value);
}
function methodReduce(arr,callback,initialValue){
  if(initialValue === undefined){
    initialValue = 0
  }
  for (let i = 0; i < arr.length; i++) {
    initialValue = callback(initialValue,arr[i],i,arr)
  }
  return initialValue
}
console.log(methodReduce(arr,callbackreduce))
// ----------------------------------------
// MÉTODO FIND
function callbackfind(value) {
  return value > 2
}
function methodFind(arr,callback){
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if((callback(value,i,arr))){
      return value
    } 
  }
  return 'underfined'
}
console.log(methodFind(arr,callbackfind))

// ---------------------------------------
// MÉTODO INCLUDES
function callbackincludes(value) {
  return (value = true);
}
function methodIncludes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      return callbackincludes(arr[i]);
    }
  }
  return false;
}
console.log(methodIncludes(arr,callbackincludes));

// ----------------------------------------
// MÉTODO INDEXOF
function methodIndexOf(arr,searchElement,positionArr){
  const position = -1
  if(positionArr === undefined){
    positionArr = 0
  }else if (positionArr>=arr.length){
    return -1
  }else if (positionArr<0){
  }
  if(positionArr>=arr.length){
    return position
  }else if (positionArr>=0){
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]===searchElement){
        position = i
      }
    }
  }else if (positionArr<=0){
    const positionNegative =(arr.length + positionArr)
    for (let i = positionNegative; i < arr.length; i++) {
     if(arr[i]===searchElement){
      position = i
     } 
    }
  }
  return position
}
console.log(methodIndexOf(arr,9,3))