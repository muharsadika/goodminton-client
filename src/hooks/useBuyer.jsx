import { API } from "../libs/api";
import { useQuery } from "@tanstack/react-query";

export function useBuyer() {

  const {
    data: GetBuyer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const response = await API.get("/buyer/auth/check-auth");
      return response.data.data;
    },
  });

  return {
    GetBuyer,
    isLoading,
    error,
  };
}

