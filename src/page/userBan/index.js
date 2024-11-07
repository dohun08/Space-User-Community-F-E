import React from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import Larrow from "../../assets/left_arrow.svg";
import Rarrow from "../../assets/right_arrow.svg";

const UserBan = ()=>{
    return(
        <S.container>
            <Header/>
            <h2>밴된 유저 목록</h2>
            <S.main>
                <S.section>
                    <p>유저이름</p>
                    <S.buttonBox>
                        <S.save type={"button"}>살리기</S.save>
                        <S.die type={"button"}>죽이기</S.die>
                    </S.buttonBox>
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
export default UserBan;