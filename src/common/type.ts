// // type User = {
// //   id: number;
// //   email: string;
// //   first_name: string;
// //   last_name: string;
// //   avatar: string;
// //   age: number;
// // };
// // type Users = Array<User>;

// // const users: Users = [
// //   {
// //     id: 7,
// //     email: "michael.lawson@reqres.in",
// //     first_name: "Michael",
// //     last_name: "Lawson",
// //     avatar: "https://reqres.in/img/faces/7-image.jpg",
// //     age: 23,
// //   },
// //   {
// //     id: 8,
// //     email: "lindsay.ferguson@reqres.in",
// //     first_name: "Lindsay",
// //     last_name: "Ferguson",
// //     avatar: "https://reqres.in/img/faces/8-image.jpg",
// //     age: 20,
// //   },
// // ];

// // type Product = {
// //   id: number;
// //   name: string;
// //   price: number;
// //   currency: string;
// //   ingredients: string[];
// //   type: string;
// //   available: boolean;
// // };
// // type Products = Array<Product>;

// // const products: Products = [
// //   {
// //     id: 1,
// //     name: "Burger Premium",
// //     price: 6,
// //     currency: "euro",
// //     ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
// //     type: "burger",
// //     available: true,
// //   },
// //   {
// //     id: 2,
// //     name: "Burger Lite",
// //     price: 2.3,
// //     currency: "euro",
// //     ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
// //     type: "burger",
// //     available: true,
// //   },
// // ];
// // type GetUser = (id: number, users: Users) => User | undefined;

// // const getUser: GetUser = (id, users) => users.find((user) => user.id === id);

// // С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

// //     1. Создать строку из названий стран через запятую
// //     2. Посчитать общее количнство людей в данном массиве стран.
// //     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
// //     4. Получить массив валют.
// //     5. Получить массив городов, отсортированных в алвавитном порядке.
// //     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

// type Country = {
//   country: string;
//   abbreviation: string;
//   city: string;
//   currency_name: string;
//   population: number;
// };

// type Countries = Array<Country>;

// const countries: Countries = [
//   {
//     country: "United Arab Emirates",
//     abbreviation: "AE",
//     city: "Abu Dhabi",
//     currency_name: "Arab Emirates Dirham",
//     population: 9630959,
//   },
//   {
//     country: "Poland",
//     abbreviation: "PL",
//     city: "Warszawa",
//     currency_name: "Polish Zloty",
//     population: 37974750,
//   },
//   {
//     country: "Russian Federation",
//     abbreviation: "RU",
//     city: "Moscow",
//     currency_name: "Russian Ruble",
//     population: 144478050,
//   },
// ];

// type GetCountry = (item: Array<Country>) => string;

// const getCountry: GetCountry = (countries) => {
//   let allCountriest = "";
//   countries.forEach((i) => {
//     allCountriest += `${i.country}, `;
//   });
//   return allCountriest;
// };

// // export default getCountry;

// type GetAllPopulation = (item: Array<Country>) => number;

// const getAllPopulation: GetAllPopulation = (countries) => {
//   let allPopulation = 0;
//   countries.forEach((i) => {
//     allPopulation += i.population;
//   });
//   return allPopulation;
// };
// // export default getAllPopulation;

// type SortCountries = (item: Array<Country>) => void;

// const sortCountries: SortCountries = (countries) => {
//   countries.sort((a, b) => (a.country > b.country ? 1 : -1));
//   return countries;
// };
// // export default sortCountries;

// type GetCurrencyArray = (item: Array<Country>) => Array<string>;

// const getCurrencyArray: GetCurrencyArray = (countries) => {
//   let allCurrencyArray: string[] = [];

//   countries.forEach((i) => {
//     allCurrencyArray.push(i.currency_name);
//   });

//   return allCurrencyArray;
//   let currencyArray = countries.map((item) => item.currency_name);
//   return currencyArray;
// };
// // export default getCurrencyArray;

// type SortCities = (item: Array<Country>) => void;

// const sortCities: SortCities = (countries) => {
//   countries.sort((a, b) => (a.city > b.city ? 1 : -1));
//   return countries;
// };
// // export default sortCities;

// type GetAveragePopulation = (item: Array<Country>) => string;

// const getAveragePopulation: GetAveragePopulation = (countries) => {
//   let allAveragePopulation = "";
//   countries.forEach((i) => {
//     allAveragePopulation += `In ${i.country} the average population is ${i.population}. `;
//   });
//   return allAveragePopulation;
// };
// // export default getAveragePopulation;

// // #### Задачи:

// // С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

// // 1. Создать строку из имен пользователей через запятую
// // 2. Посчитать общее количнство машин у пользователей
// // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// // 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// // 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

// type User = {
//     name: string;
//     phone: string;
//     email: string;
//     animals?: Array<string>;
//     cars?: Array<string>;
//     hasChildren: boolean;
//     hasEducation: boolean;
//   };
//   type Users = Array<User>;

//   const users: Users = [
//     {
//       name: "Harry Felton",
//       phone: "(09) 897 33 33",
//       email: "felton@gmail.com",
//       animals: ["cat"],
//       cars: ["bmw"],
//       hasChildren: false,
//       hasEducation: true,
//     },
//     {
//       name: "May Sender",
//       phone: "(09) 117 33 33",
//       email: "sender22@gmail.com",
//       hasChildren: true,
//       hasEducation: true,
//     },
//     {
//       name: "Henry Ford",
//       phone: "(09) 999 93 23",
//       email: "ford0@gmail.com",
//       cars: ["bmw", "audi"],
//       hasChildren: true,
//       hasEducation: false,
//     },
//   ];

//   type GetUsersNames = (item: Array<User>) => string;

//   const getUsersNames: GetUsersNames = (users) => {
//     let usersNames = "";

//     users.forEach((i) => {
//       usersNames += `${i.name}, `;
//     });
//     return usersNames;
//   };
// // export default getUsersNames

//   type GetCountCar = (item: Array<User>) => number;

//   const getCountCar: GetCountCar = (users) => {
//     let userCars: string[] = [];

//     users.forEach((i) => {
//       if (i.cars) {
//         i.cars.forEach((car) => {
//           userCars.push(car);
//         });
//       }
//     });
//     return userCars.length;
//   };

// // export default getCountCar;

//   type GetUsersWithEducation = (item: Array<User>) => Array<User>;

//   const getUsersWithEducation: GetUsersWithEducation = (users) => {
//     let UsersWithEducation = users.filter((user) => user.hasEducation);
//     return UsersWithEducation;
//   };
// // export default getUsersWithEducation;

//   type GetUsersWithAnimals = (item: Array<User>) => Array<User>;

//   const getUsersWithAnimals: GetUsersWithAnimals = (users) => {
//     let UsersWithAnimals = users.filter((user) => user.animals);
//     return UsersWithAnimals;
//   };
// // export default getUsersWithAnimals;

//   type GetUsersCars = (item: Array<User>) => string;

//   const getUsersCars: GetUsersCars = (users) => {
//     let userCars = "";

//     users.forEach((i) => {
//       if (i.cars) {
//         i.cars.forEach((car) => {
//           userCars += `${car}, `;
//         });
//       }
//     });
//     return userCars;
//   };

// // export default getUsersCars;

//   // Протипизировать данные
//   // ```javascript

//   1;

//   type Faculty = {
//     id: number;
//     faculty: string;
//     subjects: Array<string>;
//     countStudents: number;
//   };

//   type Faculties = Array<Faculty>;

//   const faculties: Faculties = [
//     {
//       id: 1,
//       faculty: "History department",
//       subjects: ["The World History", "History of Rome"],
//       countStudents: 44,
//     },
//     {
//       id: 2,
//       faculty: "Department of Biology",
//       subjects: ["biology", "chemistry"],
//       countStudents: 50,
//     },
//     {
//       id: 3,
//       faculty: "Faculty of Mathematics",
//       subjects: ["mathematics", "geometry", "trigonometry"],
//       countStudents: 72,
//     },
//     {
//       id: 4,
//       faculty: "Faculty of Design",
//       subjects: ["ui", "ux", "graphic design"],
//       countStudents: 37,
//     },
//   ];

//   2;
//   type Movie = {
//     id: number;
//     title: string;
//     year: number;
//     released: string;
//     runtime: string;
//     genre: Array<string>;
//     director: string;
//     writer: string;
//     actors: Array<string>;
//     plot: string;
//     country: string;
//     poster: string;
//     imdbRating: number;
//     imdbVotes: number;
//     type: string;
//     boxOffice: string;
//     production: string;
//   };

//   type Movies = Array<Movie>;

//   const movies: Movies = [
//     {
//       id: 1,
//       title: "Black Widow",
//       year: 2021,
//       released: "09 Jul 2021",
//       runtime: "134 min",
//       genre: ["Action", "Sci-Fi", "Adventure"],
//       director: "Cate Shortland",
//       writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
//       actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
//       plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
//       country: "United States",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
//       imdbRating: 6.9,
//       imdbVotes: 121932,
//       type: "movie",
//       boxOffice: "$138,027,361",
//       production: "Marvel Studios",
//     },
//     {
//       id: 2,
//       title: "Harry Potter and the Deathly Hallows: Part 2",
//       year: 2011,
//       released: "15 Jul 2011",
//       runtime: "130 min",
//       genre: ["Adventure", "Drama", "Fantasy"],
//       director: "David Yates",
//       writer: "Steve Kloves, J.K. Rowling",
//       actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//       plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
//       country: "United Kingdom, United States",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

//       imdbRating: 8.1,
//       imdbVotes: 790377,
//       type: "movie",
//       boxOffice: "$381,409,310",
//       production: "Heyday Films, Moving Picture Company, Warner Bros.",
//     },
//   ];

export type Card = {
  id: string;
  image: string;
  title: string;
  text: string;
  date: string;
  saved?: boolean;
  likeStatus?: LikeStatus | null;
};
export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
  Save = "save",
}
