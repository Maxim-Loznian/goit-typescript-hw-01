// Оголошення інтерфейсу для властивості details
interface PageDetails {
  createAt: Date;
  updateAt: Date;
}

// Оголошення основного типу даних для сторінки
interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close'; // Літеральний тип для статусу
  details?: PageDetails; // Необов'язкова властивість
}

// Приклади об'єктів типу Page
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
