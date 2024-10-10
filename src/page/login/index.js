import * as S from './style.ts'
import Logo from '../../assets/Logo.svg'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import LoginBtn from '../../components/Button/Login/index.js';
function Login(){
    const [id, setId] = useState('');
    const inputRef = useRef();
    const [pw, setPw] = useState('');
    useEffect(()=>{
        inputRef.current.focus();
    }, []);
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
                
                <LoginBtn name={'로그인'} isBlack = {true} id={id} pw = {pw} />
            </S.form>
            <p>아직회원이 아니세요? <Link to={'/signup'}>회원가입</Link></p>
        </S.container>
    )
}
export default Login;