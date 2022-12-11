/*Adicione seu codigo abaixo */

let arr = [0, 1, 2, 3, 4];

// ---------------------------------------
// MÉTODO MAP))
function callbackmap(value) {
  return value * 2;
}
function newArr(element) {
  let newArr2 = [];
  for (let i = 0; i < element.length; i++) {
    newArr2.push(callbackmap(element[i]));
  }
  return newArr2;
}
console.log(newArr(arr));
// ---------------------------------------
// MÉTODO FILTER))
function callbackfilter(value) {
  return value;
}
function childMore3(idade) {
  const passed = [];
  for (let i = 0; i < idade.length; i++) {
    if (idade[i] > 2) {
      passed.push(callbackfilter(arr[i]));
    }
  }
  return passed;
}
console.log(childMore3(arr));

// ---------------------------------------
// MÉTODO REDUCE))
function callbackreduce(contador, value) {
  return (contador += value);
}
function soma(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let result = (total += arr[i]);
    callbackreduce(result);
  }
  return total;
}
console.log(soma(arr));
// ----------------------------------------
// MÉTODO FIND
function callbackfind(value) {
  return value;
}
function comparar(arr) {
  let num;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
      num = arr[i];
      callbackfind(num);
    }
  }
  return num;
}
console.log(comparar(arr));

// ---------------------------------------
// MÉTODO INCLUDES
function callbackincludes(value) {
  return (value = true);
}
function metIncludes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      return callbackincludes(arr[i]);
    }
  }
  return false;
}
console.log(metIncludes(arr));
// ----------------------------------------
// MÉTODO INDEXOF
function callbackIndexOf(value) {
  return value;
}
function metIndexOf(arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i];
    if (result[i] == 2) {
      return callbackIndexOf(i);
    }
  }
  return -1;
}
console.log(metIndexOf(arr));
