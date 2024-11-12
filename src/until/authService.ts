import {authAtom} from '../recoil/authAtom'
import {useRecoilState} from 'recoil'

export const useLogout =  ()=>{
    const [auth, setAuth] = useRecoilState(authAtom);
const logout = async () => {
    try{
        const response = await fetch('/api/user/logout', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `${auth.access_Token}`
            },
            credentials:'include'
        });

        if(response.status === 200){
            setAuth({
                access_Token: '',
                username: '',
                isAdmin:false
            })
            localStorage.removeItem('accessToken');
            localStorage.removeItem('username');
            return true;
        }
        else{
            console.log("logout 실패")
            return false;
        }
    }catch (error){
        console.log("logout error : " + error);
        return false;
    }
}
    return logout;
};

export const useCheck = async ()=> {
    const [auth, setAuth] = useRecoilState(authAtom);

    try{
        const response = await fetch('/api/user/reissue', {
            method:'GET',
            credentials:'include',
        });
        const data = await response.json();
        const newAccessToken = data.accessToken;
        if(response.ok){
            setAuth({
                access_Token: newAccessToken,
                username: auth.username,
                isAdmin: auth.isAdmin
            })
        }
    }catch(error){
        setAuth({
            access_Token: '',
            username: '',
            isAdmin:false
        })
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        console.log("on error accessToken 발급", error);
    }
}

