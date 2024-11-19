import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import Logo from '../../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom";
import BackArrow from "../../assets/back_Arrow.svg";
import OImg from '../../assets/O.svg'
import XImg from '../../assets/X.svg'

function Signup(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [repw, setRePw] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const idRef = useRef<HTMLInputElement | null>(null);
    const pwRef = useRef<HTMLInputElement | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const auth = useRecoilValue(authAtom);
    const [confirm, setConfirm] = useState<boolean>(false);
    const [isConfirm, setIsConfirm] = useState({
        status:false,
        message:true
    });
    const [verifyNumber, setVerifyNumber] = useState('');
    const [valueNumber, setValueNumber] = useState('');
    useEffect(()=>{
        if(auth.access_Token !== '') navigate('/');
        idRef.current?.focus();
    }, [])

    const navigate = useNavigate();
    const goSignup = async ()=>{
        if(id === ""){
            alert("아이디가 비어있습니다.");
            idRef.current?.focus();
        }
        else if(pw===""){
            alert("비밀번호가 비어있습니다.");
            pwRef.current?.focus();
        }
        else if(age === ""){
            alert("나이가 비어있습니다.");
            ageRef.current?.focus();
        }
        else if(email === ""){
            alert("이메일이 비어있습니다.");
            emailRef.current?.focus();
        }
        else if(pw !== repw){
            alert("비밀번호가 일치하지 않습니다.");
        }
        else{
            try{
                const response = await fetch('/api/user/register', {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        email: email,
                        username: id,
                        password: pw,
                        age: age
                    }),
                });
                if(response.status === 201){
                    console.log("회원가입성공");
                    navigate('/login');
                }
            }catch(error){
                console.log("error on ", error);
            }
        }
    }
    const confirmNumber = async ()=>{
        try{
            const response = await fetch('/api/user/confirm', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            //data로 인증번호 받아오기
            if(response.ok){
                // setVerifyNumber();
                setConfirm(true);
            }
        }catch(error){
            console.log("error on confirmNumber", error);
        }
    }
    const confirmMassage = ()=>{
        if(verifyNumber === valueNumber){
            setIsConfirm({
                status:true,
                message:true
            });
        }
        else{
            setIsConfirm({
                status:true,
                message:false
            });
        }
    }
    return(
        <S.container>
            <S.backArrow src={BackArrow} alt="Back Arrow" onClick={()=>navigate(-1)}/>
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
                    <S.Label>나이</S.Label>
                    <S.Input
                        ref={ageRef}
                        type='number'
                        placeholder='나이를 입력해주세요'
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </S.dataIn>

                <S.email>
                    <div>
                        <S.Label>이메일</S.Label>
                        <S.Input
                            ref={emailRef}
                            type='email'
                            placeholder='이메일을 입력해주세요'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    {confirm ?
                        null :
                        <S.confirmBtn type={"button"} onClick={()=>setConfirm(true)} value={"인증번호 보내기"}></S.confirmBtn>
                    }
                </S.email>

                {confirm ? <S.dataIn>
                    <S.Label>인증번호</S.Label>
                    <S.valueNumberBox>
                        <S.valueNumber
                            type='text'
                            placeholder='이메일로 보내진 인증번호를 입력해주세요'
                            value={valueNumber}
                            onChange={(e)=>setValueNumber(e.target.value)}
                        />
                        {isConfirm.status ?
                            <S.statusImgBox>
                                <img src={isConfirm.message ? OImg : XImg} alt={"status"}></img>
                                {isConfirm.message ?
                                    <S.O>완료</S.O>
                                    : <S.X>실패</S.X>}
                            </S.statusImgBox> :
                            null}
                    </S.valueNumberBox>


                </S.dataIn> : <S.unBox></S.unBox>}
                {confirm ?
                    <S.confirmBtn type={"button"} onClick={confirmMassage} value={"인증번호 확인"}></S.confirmBtn>
                : null}

                <S.nativeLogin>
                    <p>이미 회원이신가요?</p>
                    <Link to={'/login'}>로그인</Link>
                </S.nativeLogin>

            </S.form>
            <S.Signup
                onClick={goSignup}
            >
                회원가입
            </S.Signup>
        </S.container>
    )
}
export default Signup;