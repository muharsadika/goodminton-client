import { API } from "../../../../utils/API";
import { useQuery } from "@tanstack/react-query";

const fetchItems = async () => {
  const response = await API.get("admin/auth/get-products", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: () => fetchItems(),
  })
}