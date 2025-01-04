import * as S from './style'
import Logo from '../../assets/Logo.svg'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {authAtom} from "../../recoil/authAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import BackArrow from '../../assets/back_Arrow.svg'
import {backSightAtom} from "../../recoil/backSight";

function Login(){
    const [email, setEmail] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [pw, setPw] = useState<string>('');
    const backSight = useRecoilValue(backSightAtom);
    useEffect(()=>{
        if(auth.access_Token !== ''){
            navigate('/');
        }
        inputRef.current?.focus();
    }, []);
    const [auth, setAuth] = useRecoilState(authAtom);
    const navigate = useNavigate();
    const goLogin = async ()=>{
        if(email === ""){
            alert("아이디가 비어있습니다");
        }
        else if(pw === ""){
            alert("비밀번호가 비어있습니다");
        }
        else{
            try{
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    credentials:'include',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        username: email,
                        password: pw
                    })
                });
                console.log(response);
                if(response.ok){
                        setAuth({
                            access_Token: response.headers.get('authorization') || '',
                            isAdmin: false,
                            username: email
                        })
                    backSight.before === "/signup" ?  navigate(-2) : navigate(-1);
                }
                else{
                    console.log("login 실패", response.status);
                }
            }catch(error){
                console.log("error on login: ",error);
            }
        }
    }
    const enter= (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            goLogin();
        }
    }
    return(
        <S.container>
            <S.backArrow src={BackArrow} alt="Back Arrow" onClick={()=>navigate(-1)}/>
            <S.Logo src={Logo} alt='logo'/>
            <h2>환영해요!</h2>
            <S.form>

                <S.dataIn>
                    <S.Label>아이디</S.Label>
                    <S.Input
                        ref={inputRef}
                        type='text'
                        placeholder='아이디를 입력해주세요'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>비밀번호</S.Label>
                    <S.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={pw}
                        onChange={(e) => {setPw(e.target.value);}}
                        onKeyDown={(e) => {
                            enter(e)
                        }}
                    />

                </S.dataIn>

                <S.LoginBtn
                    onClick={goLogin}
                    type="button"
                    value={"로그인"}
                />
            </S.form>
            <S.navi>
                <p>아직 회원이 아니세요?</p>
                <S.btnText to={'/signup'}>회원가입</S.btnText>
            </S.navi>
        </S.container>
    )
}

export default Login;