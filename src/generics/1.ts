import axios from 'axios';

// Використання Generics для типізації функції fetchData
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); // Типізація запиту з використанням Generics
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Приклад використання
// interface для типу даних, які ми очікуємо отримати
interface User {
  id: number;
  name: string;
  email: string;
}

// Виклик функції з типізацією Generics
fetchData<User>('https://api.example.com/user/1')
  .then(user => console.log(user))
  .catch(error => console.error(error));
