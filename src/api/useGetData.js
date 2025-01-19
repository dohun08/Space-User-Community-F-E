import { useQuery } from "react-query";
import axiosDataClient from "./axiosClient.js";

export const useGetData = (url, queryKey, options = {}) => {
    return useQuery(
        [queryKey],
        async () => {
            const { data } = await axiosDataClient.get(url);
            return data;
        },
        {
            ...options,
            onError: (error) => {
                console.error("Error fetching data:", error);
            }
        }
    );
}