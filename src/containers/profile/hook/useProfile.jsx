import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../redux/slice/profileSlice';
import { getProfile } from '../../../redux/slice/profileSlice';
import Swal from 'sweetalert2';

export const useProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save the changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        dispatch(updateProfile(formValues))
          .then(() => {
            setIsLoading(false);
            Swal.fire({
              icon: 'success',
              title: 'Saved',
              text: 'Your profile has been successfully updated!',
            });
          })
          .catch((error) => {
            setIsLoading(false);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while updating your profile.',
              footer: error.message,
            })
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: 'info',
          title: 'Changes are not saved',
          text: 'Your profile has not been updated.',
        })
      }
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
