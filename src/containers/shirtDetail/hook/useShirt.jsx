import { API } from "../../../utils/API";
import { useQuery } from "@tanstack/react-query";

const fetchShirt = async (id) => {
  const response = await API.get(`admin/auth/get-product/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useShirt = (id) => {
  return useQuery({
    queryKey: ["shirt", id],
    queryFn: () => fetchShirt(id),
  })
}