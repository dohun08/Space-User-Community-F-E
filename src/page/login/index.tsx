import * as S from './style';
import Logo from '../../assets/Logo.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAtom } from "../../recoil/authAtom";
import { useRecoilValue } from 'recoil';
import BackArrow from '../../assets/back_Arrow.svg';
import { backSightAtom } from "../../recoil/backSight";
import { useLogin } from '../../hooks/useUsersQuery';

function Login() {
    const [email, setEmail] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [pw, setPw] = useState<string>('');
    const backSight = useRecoilValue(backSightAtom);
    const auth = useRecoilValue(authAtom);
    const navigate = useNavigate();
    const { mutate: login, isLoading, isError } = useLogin(email, pw);

    useEffect(() => {
        if (auth.access_Token !== '') {
            navigate('/');
        }
        inputRef.current?.focus();
    }, [auth.access_Token, navigate]);

    const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            login({ email, pw }); // 파라미터를 객체로 전달
        }
    };

    return (
        <S.container>
            <S.backArrow src={BackArrow} alt="Back Arrow" onClick={() => navigate(-1)} />
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </S.dataIn>
                <S.dataIn>
                    <S.Label>비밀번호</S.Label>
                    <S.Input
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        onKeyDown={enter}
                    />
                </S.dataIn>
                <S.LoginBtn
                    onClick={() => login({ email, pw })}
                    type="button"
                    value={"로그인"}
                />
            </S.form>
            <S.navi>
                <p>아직 회원이 아니세요?</p>
                <S.btnText to={'/signup'}>회원가입</S.btnText>
            </S.navi>
        </S.container>
    );
}

export default Login;