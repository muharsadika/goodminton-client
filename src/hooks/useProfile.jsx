import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/slice/profileSlice';

export const useProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [formValues, setFormValues] = useState({
    fullname: profile ? profile.fullname : '',
    username: profile ? profile.username : '',
    email: profile ? profile.email : '',
    phone: profile ? profile.phone : '',
    address: profile ? profile.address : '',
    profile_picture: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues({
      ...formValues,
      profile_picture: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(updateProfile(formValues))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error updating profile:', error.message);
      });
  };

  return {
    profile,
    formValues,
    isLoading,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};
