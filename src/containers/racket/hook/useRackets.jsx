import { API } from "../../../utils/API";
import { useQuery } from "@tanstack/react-query";

const fetchRackets = async () => {
  const response = await API.get("admin/auth/get-products", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useRackets = () => {
  return useQuery({
    queryKey: ["rackets"],
    queryFn: () => fetchRackets(),
  })
}