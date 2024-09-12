type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

// Функція, яка приймає часткові дані користувача
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  console.log('Updating user with values:', initialValues);
}

// Приклад виклику функції
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
