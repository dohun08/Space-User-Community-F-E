import {useRecoilState} from "recoil";
import {authAtom} from "../recoil/authAtom";
import React, {useEffect} from "react";
// accessToken이 유효하지않다면 accessToken 재발급하기

const TokenRefresher = ({ children }) => {
    const [auth, setAuth] = useRecoilState(authAtom);
    useEffect(() => {
         const Check = async () => {

            if(auth.access_Token === '' || auth.access_Token === undefined) return ;

            try{
                const response = await fetch('/api/user/reissue', {
                    method:'GET',
                    credentials:'include',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': `${auth.access_Token}`
                    }
                });

                if(response.ok){
                    console.log("accessToken 재발급");
                    setAuth({
                        access_Token: response.headers.get('authorization') || '',
                        username: auth.username,
                        isAdmin: auth.isAdmin
                    })
                    return true;
                }
                else if(response.status === 401){
                    console.log("refresh token 만료");
                    setAuth({
                        access_Token: '',
                        username: '',
                        isAdmin:false
                    })
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('username');
                    alert("오래된 로그인 세션으로 인해 로그아웃되었습니다. 다시 로그인해주세요.");
                    return false;
                }
            }catch(error){
                console.log("on error accessToken 재발급", error);
            }
        }
         Check();
    }, [auth.access_Token]);
    return children;
}
export default TokenRefresher;