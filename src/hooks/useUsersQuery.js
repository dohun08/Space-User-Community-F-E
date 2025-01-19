import { useMutation, useQuery } from "react-query";
import * as API from "../api/userApi";
import { authAtom } from "../recoil/authAtom";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';


export const useLogoutMutation = () => {
    return useMutation(API.logout, {
      onSuccess: () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login'; // 로그인 페이지로 리다이렉트
      },
      onError: (error) => {
        console.error('Logout failed:', error);
      },
    });
  };


export const useProfile = (id) => {
    return useQuery(['profile', id], async () => {
        const res = await API.profile(id);
        return res.data;
    });
};


export const useLogin = (id, pw) =>{
    const [auth, setAuth] = useRecoilState(authAtom);
    const navigate = useNavigate();
    
    return useMutation(API.login, {
        onSuccess: (res) => {
            
          setAuth({
            access_Token: res.headers.authorization || '',
            isAdmin: false,
            username: id
          });
          navigate(-1); 
        },
        onError: (error) => {
          console.error("Login failed:", error.message);
        },
      });
}

export const useRegister = ()=>{
    
    const navigate = useNavigate();
    return useMutation(API.register, {
        onSuccess : ()=>{
            navigate('/login');
        },
        onError: (error) => {
            if (error.response?.status === 409) {
                console.error("409 Conflict: 이미 등록된 사용자입니다.");
                alert("이미 등록된 사용자입니다.");
            } else {
                console.error("An error occurred:", error.message);
                alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        },
    })
}

export const useSendEmail = ()=>{
    return useMutation(API.sendEmail, {
        onSuccess : (res) =>{
            alert('이메일이 발송되었습니다.');
        },
        onError : (error)=>{     
            console.log(error);
            if (error.status === 409) {
                console.error("409 Conflict: 이미 등록된 사용자입니다.");
                alert("이미 등록된 사용자입니다.");
            } else {
                console.error("An error occurred:", error.message);
                alert("이메일 발송 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        }
    })
}

export const useReport = ()=>{
    const navigate = useNavigate();
    return useMutation(API.report, {
        onSuccess : () =>{
            navigate('/');
        },
        onError : (error)=>{
            console.log(error);
        }
    })
}

export const useUpdate = ()=>{
    const [auth, setAuth] = useRecoilState(authAtom);
    return useMutation(API.update, {
        onSuccess : ({res, username})=>{
            console.log(res, username);
            
            setAuth((prev) => ({
                ...prev,
                access_Token: res.headers.get('authorization') || auth.access_Token,
                username: username
            }));
            return 1;
        }
    })
}