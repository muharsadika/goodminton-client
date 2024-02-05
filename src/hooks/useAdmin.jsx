import { API } from "../libs/api";
import { useQuery } from "@tanstack/react-query";

export function useAdmin() {

  const {
    data: GetBuyer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const response = await API.get("/admin/auth/check-auth");
      return response.data.data;
    },
  });

  return {
    GetBuyer,
    isLoading,
    error,
  };
}

