import * as S from './style'
import Logo from '../../assets/Logo.svg'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {authAtom} from "../../recoil/authAtom";
import { useSetRecoilState } from 'recoil';


function Login(){
    const [email, setEmail] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [pw, setPw] = useState('');

    useEffect(()=>{
        inputRef.current?.focus();
    }, []);
    const setAuth = useSetRecoilState(authAtom);
    const navigate = useNavigate();
    const goLogin = async ()=>{
        if(email === ""){
            alert("아이디가 비어있습니다");
        }
        else if(pw === ""){
            alert("비밀번호가 비어있습니다");
        }
        else{
            const accessToken = null;
            try{
                const response = await fetch('http://10.150.151.149:8080/user/login', {
                    method: 'POST',
                    credentials:'include',
                    headers:{
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: pw
                    })
                })
                if(response.ok){
                    setAuth({
                        isLogin: true,
                        username: email
                    })
                    navigate('/');
                }
            }catch(error){
                console.log("error on login: ",error);
            }
        }
    }
    return(
        <S.container>
            <S.Logo src={Logo} alt='logo' />
            <h2>환영해요!</h2>
            <S.form>
                <S.dataIn>
                    <S.Label>아이디</S.Label>
                    <S.Input
                        ref={inputRef}
                        type='text' 
                        placeholder='아이디를 입력해주세요'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>비밀번호</S.Label>
                    <S.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={pw}
                        onChange={(e)=>setPw(e.target.value)}
                    />
                </S.dataIn>
                
                <S.LoginBtn
                    onClick={goLogin} 
                    type="button" 
                >
                    로그인
                </S.LoginBtn>
            </S.form>
            <p>아직 회원이 아니세요? <Link to={'/signup'}>회원가입</Link></p>
        </S.container>
    )
}
export default Login;