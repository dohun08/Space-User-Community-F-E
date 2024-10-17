import * as S from './style.ts';
import React from "react";


function LongLong({data}){
    return(
        <S.Document>
            <S.titleBox>
                <img src={"/images/man.svg"} alt="우주선1" />
                <S.title>
                    <span>data.title</span>
                    <S.date>data.date</S.date>
                </S.title>
            </S.titleBox>
            <S.Contenttype>
                <p>data.category</p>
                <p>data.writer</p>
            </S.Contenttype>
        </S.Document>
    )
}
export default LongLong;