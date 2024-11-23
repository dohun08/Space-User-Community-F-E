import {Doc} from "../types";

export const getDoc = async (order:string):Promise<Doc[]> => {
    if(order === "broad"){
        try{
            const response = await fetch(`/api/user/broadcast`, {
                method:'GET',
            })
            const data = await response.json();
            if(response.ok){
                return data;
            }
            else{
                return [];
            }
        }catch (error){
            console.log("Document error :" , error);
            return [];
        }
    }
    else{
        try{
            const response = await fetch(`/api/community/doclist?orderBy=${order}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                }
            })
            const data = await response.json();
            if(response.ok){
                return data;
            }
            else{
                return [];
            }
        }catch (error){
            console.log("Document error :" , error);
            return [];
        }
    }
}