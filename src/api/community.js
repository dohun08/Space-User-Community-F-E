import { rejects } from "assert";
import axiosDataClient from "./axiosClient";
import { API_ENDPOINTS } from "./endpoints";

export const update = async (props)=>{

    try{
        const res = await axiosDataClient.patch(`${API_ENDPOINTS.COMMUNITY}/doc`, {
            documentId: props.documentId,
            title: props.title,
            content: props.content,
            icon: props.icon,
            category: props.category
        });
        if(res.status !== 200){
            return Promise.reject(res.status);
        };
        return res;
    }catch(error){
        console.log(error);
    }
}

export const get = async (order) => {
    try{
        const res = await axiosDataClient.get(`${API_ENDPOINTS.COMMUNITY}/doclist?orderBy=${order}`);
        if(res.status!==200) return Promise.reject(res.status);
        return res.data;
    }catch(err){
        console.log(err);
    }
}