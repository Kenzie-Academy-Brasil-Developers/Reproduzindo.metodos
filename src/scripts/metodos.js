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
  return undefined
}
console.log(methodFind(arr,callbackfind))

// ---------------------------------------
// MÉTODO INCLUDES
function callbackincludes(value) {
  return value === 3
}
function methodIncludes(arr,callback) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if ((callback(value,i,arr))){
      return true 
    }
  }
  return false;
}
console.log(methodIncludes(arr,callbackincludes));

// ----------------------------------------
// MÉTODO INDEXOF
function methodIndexOf(arr, num,initvalue){
  for (let i = initvalue; i < arr.length; i++) {
      const value = arr[i]
      if(value === num){
        return i
      }
  }
  return -1
}
console.log(methodIndexOf(arr,7,6))