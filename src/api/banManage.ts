import {useRecoilValue} from "recoil";
import {authAtom} from "../recoil/authAtom";

export const BanUser = async (name:string)=>{
    const auth = useRecoilValue(authAtom);
    try{
        const response = await fetch(`/api/admin/ban/${name}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`${auth.access_Token}`
            },
            credentials: 'include'
        });

        return response.ok;

    }catch (error){
        console.log('on error post ban user : ', error);
    }
}