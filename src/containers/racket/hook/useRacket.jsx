import { API } from "../../../libs/API";
import { useQuery } from "@tanstack/react-query";

const fetchRackets = async () => {
  const response = await API.get("admin/auth/get-products", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  });
  return response.data.data;
}

export const useRacket = () => {
  return useQuery({
    queryKey: ["rackets"],
    queryFn: fetchRackets,
  })
}