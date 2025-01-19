import { useMutation, useQuery } from "react-query";
import * as API from '../api/community';
import { useNavigate } from "react-router-dom";

export const useUpdate = ()=>{
    const navigate = useNavigate();
    return useMutation(API.update, {
        onSuccess: ()=>{
            navigate('/');
        },
        onError : (err) =>{
            console.log(err);
        }
    })
}

export const useGet = (order) =>{
    console.log(order);
    
    return useQuery(
        'get',
        () =>{
            return API.get(order); 
        }
    )
}