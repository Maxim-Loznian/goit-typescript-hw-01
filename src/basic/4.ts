// Функція, яка приймає рядок і нічого не повертає (тип void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція, яка приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка не приймає аргументів і ніколи не повертається (тип never)
function customError(): never {
  throw new Error('Error');
}