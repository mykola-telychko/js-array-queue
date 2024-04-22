let arr = [1, 2, 3];
const limit = arr.length; // Ліміт довжини масиву

function addToQueue(newNumber) {
  // Перевіряємо, чи існує нове число в масиві
  if (!arr.includes(newNumber)) {
    // Зміщуємо кожний елемент масиву вправо на одну позицію
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    
    // Додаємо нове унікальне число на початок масиву
    arr[0] = newNumber;
  }
  
  // Якщо довжина масиву перевищує ліміт, видаляємо останній елемент
  if (arr.length > limit) {
    arr.pop();
  }
}


addToQueue(14);
console.log(arr); // [4, 1, 2]

addToQueue(22);
console.log(arr); // [2, 4, 1]

addToQueue(51);
console.log(arr); // [5, 2, 4]

addToQueue(4);
console.log(arr); // [4, 1, 2]

// Спроба додати число 2 (вже існує в масиві)
addToQueue(2);
console.log(arr); // [2, 4, 1]

addToQueue(5);
console.log(arr); // [5, 2, 4]
