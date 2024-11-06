import * as S from './style.ts'
import Logo from '../../assets/Logo.svg'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {authAtom} from "../../recoil/authAtom";
import { useSetRecoilState } from 'recoil';


function Login(){
    const [id, setId] = useState('');
    const inputRef = useRef();
    const [pw, setPw] = useState('');
    
    useEffect(()=>{
        inputRef.current.focus();
    }, []);
    const [setAuth] = useSetRecoilState(authAtom);
    const navigate = useNavigate();
    const goLogin = async ()=>{
        if(id === ""){
            alert("아이디가 비어있습니다");
        }
        else if(pw === ""){
            alert("비밀번호가 비어있습니다");
        }
        else{
            try{
                const response = await fetch('/user/login', {
                    method: 'POST',
                    credentials:'include',
                    body: JSON.stringify({
                        id: id,
                        password: pw
                    })
                })
                const data = await response.json();
                if(response.status=== 200){
                    setAuth({
                        isLogin: true,
                        username: id
                    })
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("isAdmin", "true");
                    navigate('/');
                }
            }catch(error){
                console.log("error on : ",error);
                navigate("/error");
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
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
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
            <p>아직회원이 아니세요? <Link to={'/signup'}>회원가입</Link></p>
        </S.container>
    )
}
export default Login;