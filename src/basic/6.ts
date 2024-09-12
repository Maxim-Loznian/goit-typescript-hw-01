// Оголошення інтерфейсу для адреси
interface Address {
  city: string;
  country: string;
}

// Оголошення інтерфейсу для користувача, з необов'язковою властивістю address
interface User {
  name: string;
  age: number;
  email: string;
  address?: Address; // Необов'язкова властивість
}

// Приклади об'єктів типу User
const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const poly: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com'
};
