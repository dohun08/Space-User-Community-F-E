import React, { useEffect, useRef, useState } from 'react'
import * as S from './style.ts'
import Logo from '../../assets/Logo.svg'

import { Link, useNavigate } from 'react-router-dom';

function Signup(){
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [repw, setRePw] = useState();
    const [email, setEmail] = useState();
    const idRef = useRef();
    const pwRef = useRef();
    const emailRef = useRef();

    useEffect(()=>{
        idRef.current.focus();
    }, [])

    const navigate = useNavigate();
    const goSignup = async ()=>{
        if(id === ""){
            alert("아이디가 비어있습니다.");
            idRef.current.focus();
        }
        else if(pw===""){
            alert("비밀번호가 비어있습니다.");
            pwRef.current.focus();
        }
        else if(email === ""){
            alert("이메일이 비어있습니다.");
            email.container.focus();
        }
        else if(pw !== repw){
            alert("비밀번호가 일치하지 않습니다.");
        }
        else{
            try{
                const response = await fetch('/user/register', {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name:id,
                        password:pw,
                        email:email
                    })
                })
                if(response.ok){
                    console.log("회원가입성공");
                    navigate('/login');
                }
            }catch(error){
                console.log("error on ", error);
            }
        }
    }
    return(
        <S.container>
            <img src={Logo} alt='LogoImg' />
            <h2>반가워요!</h2>
            <S.form>
                <S.dataIn>
                    <S.Label>아이디</S.Label>
                    <S.Input 
                        ref={idRef}
                        type='text' 
                        placeholder='아이디를 입력해주세요'
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>비밀번호</S.Label>
                    <S.Input
                        ref={pwRef}
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={pw}
                        onChange={(e)=>setPw(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>비밀번호확인</S.Label>
                    <S.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={repw}
                        onChange={(e)=>setRePw(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>이메일</S.Label>
                    <S.Input
                        ref={emailRef}
                        type='email'
                        placeholder='이메일을 입력해주세요'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </S.dataIn>
                
                
                <S.nativeLogin>
                    <p>이미 회원이신가요?</p>
                    <Link to={'/login'}>로그인</Link>
                </S.nativeLogin>
                
             
             
              <S.Signup
                isBlack={false}
                onClick={goSignup}
                >
                    회원가입
                </S.Signup>
            </S.form>
        </S.container>
    )
}
export default Signup;