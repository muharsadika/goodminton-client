import { API } from '../../../utils/API';
import { useQuery } from '@tanstack/react-query';

const fetchStrings = async (category) => {
  const response = await API.get(
    `admin/auth/get-product-category/${category}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  return response.data.data;
};
export const useStrings = (category) => {
  return useQuery({
    queryKey: ['strings', category],
    queryFn: () => fetchStrings(category),
  });
};

const fetchString = async (id) => {
  const response = await API.get(`/admin/auth/get-product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};
export const useString = (id) => {
  return useQuery({
    queryKey: ['string', id],
    queryFn: () => fetchString(id),
  });
};
