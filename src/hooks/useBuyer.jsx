import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login as loginAction } from '../redux/slice/authSlice';

export function useBuyer() {
  const dispatch = useDispatch();
  const buyerData = useSelector(state => state.auth);
  const token = localStorage.getItem('token'); // get the token from wherever you're storing it

  useEffect(() => {
    if (token && !buyerData.id) {
      dispatch(loginAction({ token }));
    }
  }, [token, buyerData.id, dispatch]);

  return buyerData;
}




// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export function useBuyer() {
//   const [buyerData, setBuyerData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token'); // get the token from wherever you're storing it

//     axios.get('http://localhost:5000/api/buyer/auth/check-auth', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         setBuyerData(response.data.data);
//       })
//       .catch(err => {
//         console.error('Failed to fetch buyer data:', err);
//         setError(err.message);
//       });
//   }, []); // empty dependency array means this effect runs once on mount

//   return { buyerData, error };
// }



// import { API } from "../libs/api";
// import { useQuery } from "@tanstack/react-query";

// export function useBuyer() {

//   const {
//     data: GetBuyer,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["buyer"],
//     queryFn: async () => {
//       const response = await API.get("/buyer/auth/check-auth");
//       return response.data.data;
//     },
//   });

//   return {
//     GetBuyer,
//     isLoading,
//     error,
//   };
// }

