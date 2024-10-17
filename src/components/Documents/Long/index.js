import React from "react";
import * as S from './style.ts';

//data. 애들 다 중괄호 씌우기
function LongDocument({data}){
    return(
        <>
            <S.Document>
                <S.titleBox>
                    <img src={"/images/man.svg"} alt="우주선1" />
                    <S.title>
                        <span>data.title</span>
                        <S.date>data.date</S.date>
                    </S.title>
                </S.titleBox>
                <S.titleBox>
                    <p>data.category</p>
                    <p>data.writer</p>
                </S.titleBox>
            </S.Document>
        </>
    )
}
export default LongDocument;