import * as S from './style.ts';
import LogoImg from '../../assets/Logo.svg'
import PersonImg from '../../assets/person.svg'
import ButtonArrowImg from '../../assets/bottumArrow.svg'
import SearchImg from '../../assets/search.svg'
import { useState } from 'react';
import CircleBtn from '../Button/Circle/index.js';
import {Link} from 'react-router-dom';
import {useRecoilState} from "recoil";
import {authAtom} from "../../recoil/atom/authAtom";
import axios from "axios";

function Header(){
    const [search, setSearch] = useState();
    const [auth, setAuth] = useRecoilState(authAtom);
    const [isOn, setIsOn] = useState(false);
    const logout = async ()=>{
        try{
            const response = await axios.get('/user/logout', {
                headers:{
                    'Authorization': `Bearer ${auth.token}`,
                }
            });
            if(response.status === 200){
                setAuth({
                    isLogin: false,
                    token:null,
                    username: null
                })
            }
            else{
                console.log("logout 실패")
            }
        }catch (error){
            console.log("logout error : " + error);
        }
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
            />
            <S.searchBox>
                <img src={SearchImg} alt='searchIcon' />
            </S.searchBox>
            </S.InputBox>
            {auth.isLogin ?
            <S.Info>
                <S.link to={'/write'}><CircleBtn name={'새글 작성'} /></S.link>
                <S.user onClick={()=>setIsOn(!isOn)}>
                    <img src={PersonImg} alt='personIcon' />
                    <p>{auth.username}</p>
                    <img src={ButtonArrowImg} alt='buttonArrowIcon' />
                </S.user>
                <S.setting isOn = {isOn}>
                    <S.logout to={'/'}><span>설정</span></S.logout>
                    <span onClick={()=>logout()}>로그아웃</span>
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