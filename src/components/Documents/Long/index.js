import React from "react";
import * as S from './style.ts';
import Speaker from '../../../assets/speaker_small.svg';
//data. 애들 다 중괄호 씌우기
function LongDocument({data}){
    return(
        <>{data.category === "공지" ?
            <S.Document manage={true}>
            <S.titleBox>
            <img src={Speaker} alt="공지" />
            <S.title>
            <span>data.title</span>
            <S.date>data.date</S.date>
            </S.title>
            </S.titleBox>
            <S.titleBox>
            <p>공지</p>
            <p>관리자</p>
            </S.titleBox>
            </S.Document>:
              <S.Document manage={false}>
        <S.titleBox>
            <img src={`/images/man.svg`} alt="우주선1" />
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
        }



        </>
    )
}
export default LongDocument;