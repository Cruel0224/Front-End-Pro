'use strict';

// Ім'я користувача (string - рядок)
// Змінна const (Константа – це змінна, значення якої не можна змінити після ініціалізації)
const userName = 'Владислав';

// Вік користувача (number - число)
const userAge = 30;

// Чи пройшов верифікацію користувач? (boolean - логічне значення)
const verifiedUser  = true;

// Дата реєстрації користувача (string - рядок)
const dataRegistration = '29.05.2025р.';

// Номер банківської карти (bigint - велике число з суфіксом n яке необхідне для його значення)
const cardUserNumber = 4411445850671345n;

// Чи має промокод? (null - відсутність будь-якого значення в об'єкті)
// Якщо ми використовуємо typeof для перевірки типу даних null ми отримаємо object
// Змінна let - це змінна, яка дозволяє змінювати значення
let promoCode = null;

// Резервне ім'я користувача (undefined - присвоюється змінним як тільки вони були оголошені.
// Також ми можемо отримати його і в інших випадках, зазвичай коли значення не визначено.)
let nameReserved;

// Скільки має бонусів користувач? (number - число)
let quantityBonuses = 425;


// Вивід інформації про користувача у вигляді зв’язних речень!
console.log(`Користувач: ${userName}, вік: ${userAge}, Промокод: ${promoCode?? 'немає'}.`);
console.log(`Дата реєстрації: ${dataRegistration}, Номер картки: ${cardUserNumber}, Верифікація: ${verifiedUser}.`);
console.log(`Має бонусів: ${quantityBonuses}, Резервне ім'я: ${nameReserved?? 'відсутнє'}.`)



console.log('-----Типи змінних!------')
console.log(`Користувач: ${typeof userName}`);               // string
console.log(`Вік: ${typeof userAge}`);                       // number
console.log(`Верифікація: ${typeof verifiedUser}`);          // boolean
console.log(`Дата реєстрації: ${typeof dataRegistration}`);  // string
console.log(`Номер картки: ${typeof cardUserNumber}`);       // bigint
console.log(`Промокод: ${typeof promoCode}`);                // null (object)
console.log(`Резервне ім'я: ${typeof nameReserved}`);        // undefined
console.log(`Має бонусів: ${typeof quantityBonuses}`);       // number
