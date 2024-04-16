import { API } from "../../../../utils/API";
import { useQuery } from "@tanstack/react-query";

const fetchStrings = async () => {
  const response = await API.get("admin/auth/get-products", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useStrings = () => {
  return useQuery({
    queryKey: ["strings"],
    queryFn: () => fetchStrings(),
  })
}