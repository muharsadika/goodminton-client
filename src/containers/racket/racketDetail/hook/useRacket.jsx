import { API } from '../../../../utils/API';
import { useQuery } from "@tanstack/react-query";

const fetchRacket = async (id) => {
  const response = await API.get(`admin/auth/get-product/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useRacket = (id) => {
  return useQuery({
    queryKey: ["racket", id],
    queryFn: () => fetchRacket(id),
  })
}