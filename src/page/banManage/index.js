import React, {useState} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import Cbtn from "../../components/Button/Circle/";
import SearchSrc  from '../../assets/searchP.svg';
import Larrow from "../../assets/left_arrow.svg";
import Rarrow from "../../assets/right_arrow.svg";

const BanManage = ()=>{
    const goBan = ()=>{
        window.location.href = '/user/ban';
    }
    const searchUser = ()=>{

    }
    const [user, setUser] = useState('');
    return(
        <S.container>
            <Header />
            <S.main>
                <S.BanBox>
                    <S.searchBox>
                        <S.search
                            type={"text"}
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder={"유저를 입력해주세요"}
                        />
                        <img onClick={searchUser} src = {SearchSrc} alt={"search icon"} />
                    </S.searchBox>
                    <Cbtn onClick={goBan} name={"밴 목록"}/>
                </S.BanBox>
                <S.section >
                    <S.reportText>유저이름</S.reportText>
                    <S.banBtn type={"button"} value={"차단"}></S.banBtn>
                </S.section>
                <S.pageNum>
                    <S.arrow src={Larrow} alt={"왼쪽"} />
                    <p> page </p>{/*page 중괄호 씌우기*/}
                    <S.arrow src={Rarrow} alt={"오른쪽"}  />
                </S.pageNum>
            </S.main>

        </S.container>
    )
}
export default BanManage;