import {useMutation} from "react-query";
import axios from "axios";

export const useLoginMutation =(onSuccess : (res:any)=>void, onError : (res:any)=>void) =>{
    return useMutation(async ({email, pw}:{email:string, pw:string})=>{
        if(email === "" || pw === "") throw new Error("데이터가 부족합니다.");

        const res = await axios.post('/api/user/login', {
            username:email,
            password:pw
        }, {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials: true
        });
        return res;
    },
        {
            onSuccess,
            onError
        }
    );
};