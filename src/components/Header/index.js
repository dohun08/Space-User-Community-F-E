import * as S from './style.ts';
import LogoImg from '../../assets/Logo.svg'
import PersonImg from '../../assets/person.svg'
import ButtonArrowImg from '../../assets/bottumArrow.svg'
import SearchImg from '../../assets/search.svg'
import { useState } from 'react';
import CircleBtn from '../Button/Circle/index.js';
import {Link} from 'react-router-dom';

function Header({isLogin, userName}){
    const [search, setSearch] = useState();
    
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
            
            {isLogin ? 
            <S.Info>
                <CircleBtn name={'새글 작성'} />
                <S.user>
                    <img src={PersonImg} alt='personIcon' />
                    <p>{userName}</p>
                    <img src={ButtonArrowImg} alt='buttonArrowIcon' />
                </S.user>

                </S.Info> : 
            <S.Info>
                <img src={PersonImg} alt='personIcon' />
                <S.login to={'/login'}><p>로그인</p></S.login>
                <S.login to={'/signup'}><p>회원가입</p></S.login>
            </S.Info>}
            
            {/* <div>
                <p>설정</p>
                <p>로그아웃</p>
            </div> */}
        </S.container>
    )
}
export default Header;