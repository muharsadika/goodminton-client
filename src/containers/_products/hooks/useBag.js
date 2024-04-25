import { API } from '../../../utils/API';
import { useQuery } from '@tanstack/react-query';

const fetchBags = async (category) => {
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

export const useBags = (category) => {
  return useQuery({
    queryKey: ['bags', category],
    queryFn: () => fetchBags(category),
  });
};

const fetchBag = async (id) => {
  const response = await API.get(`/admin/auth/get-product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};

export const useBag = (id) => {
  return useQuery({
    queryKey: ['bag', id],
    queryFn: () => fetchBag(id),
  });
};
