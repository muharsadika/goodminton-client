import { API } from '../../../utils/API';
import { useQuery } from '@tanstack/react-query';

const fetchAllProducts = async () => {
  const response = await API.get(`/admin/auth/get-products`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  // console.log(response.data.data);
  return response.data.data;
};

export const useAllProducts = () => {
  return useQuery({
    queryKey: ['allProducts'],
    queryFn: () => fetchAllProducts(),
  });
};

const fetchProduct = async (id) => {
  const response = await API.get(`admin/auth/get-product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
};
