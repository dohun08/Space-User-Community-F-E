import {Doc} from "../types";

export const getDoc = async (order:string):Promise<Doc[]> => {
    try{
        const response = await fetch(`/api/community/doclist?orderby=${order}`, {
            method:'GET',
        })
        const data = await response.json();
        if(response.ok){
            return data.data;
        }
        else{
            return [];
        }
    }catch (error){
        console.log("Document error :" , error);
        return [];
    }
}