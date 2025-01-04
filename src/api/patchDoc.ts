import {useMutation} from "react-query";
import axios from "axios";
import {authAtom} from "../recoil/authAtom";
import {useRecoilState} from "recoil";

export const usePatchDocMutation = (onSuccess : (res:any)=>void, onError : (res : any)=>void) =>{
    const [auth] = useRecoilState(authAtom);
    return useMutation(async ({documentId, title, content, icon, category}:{documentId:string, title:string, content:string, icon:number, category:string})=>{
        if(category === "공지"){
            const res = await axios.patch('/api/broadcast', {
                documentId: documentId,
                title: title,
                content: content,
                icon: icon,
                category: category
            }, {
                headers:{
                    'Authorization': `${auth.access_Token}`,
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        }
        else{
            const res = await axios.patch('/api/community/doc', {
                documentId: documentId,
                title: title,
                content: content,
                icon: icon,
                category: category
            }, {
                headers:{
                    'Authorization': `${auth.access_Token}`,
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        }
    },
        {
            onSuccess,
            onError,
        }
    )

}