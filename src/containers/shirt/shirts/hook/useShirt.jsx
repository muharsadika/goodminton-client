import { API } from "../../../../utils/API";
import { useQuery } from "@tanstack/react-query";

const fetchShirts = async () => {
  const response = await API.get("admin/auth/get-products", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useShirts = () => {
  return useQuery({
    queryKey: ["shirts"],
    queryFn: () => fetchShirts(),
  })
}