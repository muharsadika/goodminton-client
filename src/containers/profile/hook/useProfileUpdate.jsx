import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { API } from "../../../utils/API";
import { getProfile } from "../../../redux/slice/profileSlice";
import { useDispatch } from "react-redux";

export function useProfileUpdate() {
  const profile = useSelector((state) => state.profile);
  const [formValues, setFormValues] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    profile_picture: null
  })

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    setFormValues({
      fullname: profile.fullname || "",
      username: profile.username || "",
      email: profile.email || "",
      phone: profile.phone || "",
      address: profile.address || "",
      profile_picture: null
    })
  }, [profile])

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  function handleFileChange(event) {
    setFormValues({
      ...formValues,
      profile_picture: event.target.files[0]
    })
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateProfile();
  }

  async function updateProfile() {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.keys(formValues).forEach(key => {
        formData.append(key, formValues[key]);
      });

      await API.patch("buyer/auth/update-profile", formValues, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      setSuccess(true);
      setIsLoading(false);
      setIsError(false);
      window.location.reload();
    } catch (error) {
      setSuccess(false);
      setIsLoading(false);
      setIsError(true);
      setError(error.response.data.data.message);
    }
  }

  return {
    formValues,
    handleChange,
    updateProfile,
    isLoading,
    isError,
    Error,
    success,
    handleSubmit,
    handleFileChange,
  };
}


// // useUpdateProfile.jsx
// import { useMutation } from "@tanstack/react-query";
// import { API } from "../../../utils/API";

// const updateProfile = async (profileData) => {
//   const response = await API.patch("api/buyer/auth/update-profile", profileData, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data;
// };

// export const useUpdateProfile = () => {
//   return useMutation(updateProfile);
// };

// // useUpdateProfile.jsx
// import { API } from "../../../utils/API";
// import { useMutation } from "@tanstack/react-query";

// const updateProfile = async (newProfileData) => {
//   const response = await API.patch("buyer/auth/update-profile", newProfileData, {
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     },
//   });
//   return response.data;
// }

// export const useUpdateProfile = () => {
//   return useMutation(updateProfile);
// }



// import { API } from "../../../utils/API";
// import { useMutation } from "@tanstack/react-query";

// export const useProfileUpdate = () => {
//   return useMutation(
//     async (updatedData) => {
//       const response = await API.patch("/buyer/auth/update-profile", updatedData, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//       });
//       return response.data.data;
//     }
//   );
// };



// import { API } from "../../../utils/API";
// import { useMutation } from "@tanstack/react-query";

// const updateProfile = async () => {
//   const response = await API.patch("/buyer/auth/update-profile", {
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     },
//   });
//   return response.data.data;
// }

// export const useProfileUpdate = () => {
//   return useMutation(updateProfile);
// }