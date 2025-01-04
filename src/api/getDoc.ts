import {Doc} from "../types";
import axios from "axios";
import {useQuery} from "react-query";

export const getDoc = async (order:string):Promise<Doc[]> => {
    try{
        if(order === "broad"){
            const res = await axios.get(`/api/user/broadcast`);
            return res.data;
        }
        else {
            const res = await axios.get(`/api/community/doclist?orderBy=${order}`);
            return res.data;
        }
    }catch (error){
        console.log("Document error :" , error);
        return [];
    }
}

export const useDocs = (order:string) => {
    return useQuery<Doc[], Error>(
        ['documents', order],
        () => getDoc(order),
        {
            enabled: !!order,
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            retry: 3,
            onError: (error) => console.error("React Query Error:", error),
        }
    );
}