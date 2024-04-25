import { API } from '../../../utils/API';
import { useQuery } from '@tanstack/react-query';

const fetchShirts = async (category) => {
  const response = await API.get(
    `/admin/auth/get-product-category/${category}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  // console.log(response.data.data);
  return response.data.data;
};

export const useShirts = (category) => {
  return useQuery({
    queryKey: ['shirts', category],
    queryFn: () => fetchShirts(category),
  });
};

const fetchShirt = async (id) => {
  const response = await API.get(`/admin/auth/get-product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};

export const useShirt = (id) => {
  return useQuery({
    queryKey: ['shirt', id],
    queryFn: () => fetchShirt(id),
  });
};
