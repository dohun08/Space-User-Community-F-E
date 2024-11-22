import {authAtom} from '../recoil/authAtom'
import {useRecoilState} from 'recoil'

// logout
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


// jwt decode
export function decodeJWT(token:string) {
    const base64Url = token.split('.')[1];  // 토큰에서 페이로드 부분 추출
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Base64Url을 Base64로 변환
    const decodedData = JSON.parse(atob(base64));  // Base64 디코딩 후 JSON으로 변환
    return decodedData;
}
