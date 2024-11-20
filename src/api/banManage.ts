import { authAtom } from "../recoil/authAtom";
import { useRecoilValue } from "recoil";

export const useBanUser = () => {
    const auth = useRecoilValue(authAtom);

    const banUser = async (name: string) => {
        try {
            const response = await fetch(`/api/admin/ban/${name}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization':`${auth.access_Token}`
                },
                credentials: "include",
            });

            return response.ok;
        } catch (error) {
            console.log("on error post ban user: ", error);
            return false;
        }
    };

    return banUser;
};

export const useUserBan = ()=>{
    const auth = useRecoilValue(authAtom);
    const banUserCheck = async ()=>{
        try{
            const response = await fetch('/api/admin/banlist', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${auth.access_Token}`
                }
            })
            const data = await response.json();
            return data;
        }catch (error){
            console.log("getUserBanData error : ",error);
        }
    }
    return banUserCheck;
}