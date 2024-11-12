import {Doc} from "../types";

export const getDoc = async ():Promise<Doc[]> => {
    try{
        const response = await fetch(`/api/community/doclists`, {
            method:'GET',
        })
        const data = await response.json();
        if(response.ok){
            console.log(data.data);
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