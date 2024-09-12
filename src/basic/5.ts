// Оголошення enum для днів тижня
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// Функція, яка перевіряє, чи є день вихідним
const isWeekend = (day: DayOfWeek): boolean => {
  // Вихідними вважаються субота та неділя
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}