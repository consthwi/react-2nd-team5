import { useQuery } from "@tanstack/react-query";
import api from "../untils/api";

const fetchRecipeData = () => {
  return api.get(`1/500`);
};

export const useRecipeDataQuery = () => {
  return useQuery({
    queryKey: ["recipe-data"],
    queryFn: fetchRecipeData,
    select: (result) => result.data.COOKRCP01.row,
  });
};
