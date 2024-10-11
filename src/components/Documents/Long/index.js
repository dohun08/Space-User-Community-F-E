import React from "react";
import * as S from './style.ts';
import spaceShip from '../../../assets/spaceship1.svg';
function LongDocument(){
    return(
        <>
            <S.Document>
                <S.titleBox>
                    <img src={spaceShip} alt="우주선1" />
                    <S.title>
                        <span>제목</span>
                        <S.date>생성날짜</S.date>
                    </S.title>
                </S.titleBox>
                <S.titleBox>
                    <p>카테고리</p>
                    <p>저자</p>
                </S.titleBox>
            </S.Document>
        </>
    )
}
export default LongDocument;