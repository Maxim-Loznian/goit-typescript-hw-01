// Функція merge з використанням Generics
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклади використання функції

// Об'єкти з різними типами
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { position: 'Developer', country: 'USA' };

// Поєднання об'єктів
const mergedObj = merge(obj1, obj2);
console.log(mergedObj); // { name: 'Alice', age: 30, position: 'Developer', country: 'USA' }
