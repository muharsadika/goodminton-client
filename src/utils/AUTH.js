// // import { loginSuccess } from '../redux/authSlice';
// // import { store } from '../redux/store';

// // export async function login(username, password) {
// //   const response = await fetch('https://dummyjson.com/auth/login', {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify({ username, password }),
// //   });

// //   if (!response.ok) {
// //     throw new Error('Login failed');
// //   }

// //   const data = await response.json();

// //   store.dispatch(loginSuccess(data));
// // }

// import { loginSuccess } from '../redux/authSlice';
// import { store } from '../redux/store';

// export async function login(username, password) {
//   const response = await fetch('http://localhost:5000/api/buyer/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password }),
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   const data = await response.json();

//   store.dispatch(loginSuccess(data));
// }
