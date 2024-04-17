import { API } from '../../../../utils/API';
import { useQuery } from "@tanstack/react-query";

const fetchItemDetail = async (id) => {
  const response = await API.get(`admin/auth/get-product/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useItemDetail = (id) => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchItemDetail(id),
  })
}