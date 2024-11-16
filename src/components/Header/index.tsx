import * as S from './style';
import LogoImg from '../../assets/Logo.svg'
import PersonImg from '../../assets/person.svg'
import ButtonArrowImg from '../../assets/bottumArrow.svg'
import SearchImg from '../../assets/search.svg'
import {useEffect, useState} from 'react';
import CircleBtn from '../Button/Circle';
import {Link, useNavigate} from 'react-router-dom';
import { useRecoilState, useRecoilValue} from "recoil";
import {authAtom, isLoginSelector} from "../../recoil/authAtom";
import {useLogout, useCheck, decodeJWT} from '../../until/authService'

function Header(){
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>('');
    const [isOn, setIsOn] = useState<boolean>(false);
    const [auth, setAuth] = useRecoilState(authAtom);
    const isLogin = useRecoilValue(isLoginSelector);
    const logout = useLogout();
    const Check = useCheck();
    const goLogout = async ()=>{
        try{
            if(await logout()){
                navigate('/');
            }
            else{
                if(await Check()){
                    await logout();
                }
            }
        }
        catch(error){
            console.log("on error logout", error);
        }
    }
    const goSearch = ()=>{
        if(search === '') return;
        setSearch('');
        navigate(`/search/${search}`)
    }
    useEffect(() => {
        if(auth.access_Token){
            if(decodeJWT(auth.access_Token).role === 'ROLE_ADMIN'){
                setAuth({
                    ...auth,
                    isAdmin:true
                })
            }
        }
    }, []);
    return(
        <S.container>
            <Link to={'/'} ><img src={LogoImg} alt='logo' /></Link>
            <S.InputBox>
            <S.Input 
                type='text' 
                placeholder='검색어를 입력해주세요' 
                value={search} 
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key === 'Enter') {
                        setTimeout(()=>{goSearch()}, 0);
                    }
                }}
            />
            <S.searchBox onClick={goSearch} >
                <img src={SearchImg} alt='searchIcon' />
            </S.searchBox>
            </S.InputBox>
            {isLogin ?
            <S.Info>
                <S.link to={'/write'}>
                    <CircleBtn name={'새글 작성'}  onClick={()=>navigate('/write')}/>
                </S.link>
                <S.user onClick={()=>setIsOn(!isOn)}>
                    <img src={PersonImg} alt='personIcon' />
                    <p>{auth.username}</p>
                    <img src={ButtonArrowImg} alt='buttonArrowIcon' />
                </S.user>
                <S.setting $isOn = {isOn}>
                    <S.logout to={`/user/${auth.username}`}><span>마이페이지</span></S.logout>
                    <span onClick={()=>goLogout()}>로그아웃</span>
                    <S.logout to={'/report'}><span>신고하기</span></S.logout>
                    {auth.isAdmin ? <S.logout to={'/report/manage'}><span>신고목록보기</span></S.logout> : null}
                    {auth.isAdmin ? <S.logout to={'/ban'}><span>밴 목록보기</span></S.logout> : null}
                </S.setting>
            </S.Info>
                :
            <S.Info>
                <img src={PersonImg} alt='personIcon' />
                <S.login to={'/login'}><p>로그인</p></S.login>
                <S.login to={'/signup'}><p>회원가입</p></S.login>
            </S.Info>}
        </S.container>
    )
}
export default Header;