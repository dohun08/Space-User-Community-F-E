import * as S from './style';
import LogoImg from '../../assets/Logo.svg'
import PersonImg from '../../assets/person.svg'
import ButtonArrowImg from '../../assets/bottumArrow.svg'
import SearchImg from '../../assets/search.svg'
import { useState } from 'react';
import CircleBtn from '../Button/Circle';
import {Link, useNavigate} from 'react-router-dom';
import {useRecoilState} from "recoil";
import {authAtom} from "../../recoil/authAtom";
import axios from "axios";

function Header(){
    const token : string | null = localStorage.getItem('token');
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>('');
    const [auth, setAuth] = useRecoilState(authAtom);
    const [isOn, setIsOn] = useState<boolean>(false);
    const logout = async ()=>{
        try{
            const response = await axios.get('/user/logout', {
                headers:{
                    'Authorization': `Bearer ${token}`,
                }
            });
            if(response.status === 200){
                setAuth({
                    isLogin: false,
                    username: ''
                })
            }
            else{
                console.log("logout 실패")
            }
        }catch (error){
            console.log("logout error : " + error);
        }
    }
    const goSearch = ()=>{
        setSearch('');
        navigate(`/search/${search}`)
    }
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
            {token ?
            <S.Info>
                <S.link to={'/write'}>
                    <CircleBtn name={'새글 작성'}  onClick={()=>navigate('/write')}/>
                </S.link>
                <S.user onClick={()=>setIsOn(!isOn)}>
                    <img src={PersonImg} alt='personIcon' />
                    <p>{auth.username}</p>
                    <img src={ButtonArrowImg} alt='buttonArrowIcon' />
                </S.user>
                <S.setting isOn = {isOn}>
                    <S.logout to={'/user'}><span>마이페이지</span></S.logout>
                    <span onClick={()=>logout()}>로그아웃</span>
                    <S.logout to={'/'}><span>신고하기</span></S.logout>
                    <S.logout to={'/reportManage'}><span>신고목록보기</span></S.logout>
                   <S.logout to={'/ban'}><span>밴 목록보기</span></S.logout>
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