import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = (params) => {
  const getProduct = useQuery({
    queryKey: ["product", params],
    queryFn: () => api.get("/products", { params }),
  });

  return { getProduct };
};
