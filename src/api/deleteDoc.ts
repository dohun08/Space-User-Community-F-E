import {useMutation} from "react-query";
import axios from "axios";
import {authAtom} from "../recoil/authAtom";
import {useRecoilValue} from "recoil";

export const useDeleteDocMutation = (onSuccess : (res:any)=>void, onError : (res:any)=>void)=>{
    const auth = useRecoilValue(authAtom);
    return useMutation(async ({ id}:{id:string})=>{
        console.log(id);
        if(auth.isAdmin){
            const res = await axios.delete(`/api/admin/doc/${id}`, {
                headers:{
                    'Authorization': auth.access_Token,
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            return res.data;
        }
        else{
            const res = await axios.delete(`/api/community/doc/${id}`, {
                headers:{
                    'Authorization': auth.access_Token,
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            return res.data;
        }
    }, {
        onSuccess,
        onError
    })
}