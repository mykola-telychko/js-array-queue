function addToQueue(arr, newNumber) {
  // check new num // Перевіряємо, чи існує нове число в масиві
  if (!arr.includes(newNumber)) {
    // add new unique // Додаємо нове унікальне число на початок масиву
    arr.unshift(newNumber);
    
    // remove last // Якщо довжина масиву перевищує ліміт, видаляємо останній елемент
    if (arr.length > limit) {
      arr.pop();
    }
  }
  
  return arr; 
}

let arr = [1, 2, 3];
const limit = 3; // length arr

// add new 
arr = addToQueue(arr, 4);
console.log(arr); // [4, 1, 2]

// try duplicate // Спроба додати число 2 (вже існує в масиві)
arr = addToQueue(arr, 2);
console.log(arr); // [4, 1, 2]

// add new 
arr = addToQueue(arr, 5);
console.log(arr); // [5, 4, 1]
