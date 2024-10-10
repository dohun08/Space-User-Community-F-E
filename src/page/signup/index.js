import React, { useEffect, useRef, useState } from 'react'
import * as S from './style.ts'
import Logo from '../../assets/Logo.svg'
import LoginBtn from '../../components/Button/Login/index.js';
import { Link } from 'react-router-dom';
function Signup(){
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [email, setEmail] = useState();
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
    }, [])
    return(
        <S.container>
            <img src={Logo} alt='LogoImg' />
            <h2>반가워요!</h2>
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
                <S.dataIn>
                    <S.Label>비밀번호확인</S.Label>
                    <S.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={pw}
                        onChange={(e)=>setPw(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>이메일</S.Label>
                    <S.Input
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
                
             
             
              <LoginBtn id={id} pw={pw} email={email} name={'회원가입'} isBlack={false} />
            </S.form>
        </S.container>
    )
}
export default Signup;