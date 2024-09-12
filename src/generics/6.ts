type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використання Omit для створення типу Params без поля 'errors'
type Params = Omit<Form, 'errors'>;

// Приклад використання типу Params
const formParams: Params = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-7890',
};

console.log(formParams);
