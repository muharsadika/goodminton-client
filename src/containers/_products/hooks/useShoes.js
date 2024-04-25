import { API } from '../../../utils/API';
import { useQuery } from '@tanstack/react-query';

const fetchShoes = async (category) => {
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

export const useShoes = (category) => {
  return useQuery({
    queryKey: ['shoes', category],
    queryFn: () => fetchShoes(category),
  });
};

const fetchShoe = async (id) => {
  const response = await API.get(`/admin/auth/get-product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};

export const useShoe = (id) => {
  return useQuery({
    queryKey: ['shoe', id],
    queryFn: () => fetchShoe(id),
  });
};
