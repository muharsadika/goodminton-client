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
