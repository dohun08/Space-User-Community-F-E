import React from "react";
import * as S from './style';
import Speaker from '../../../assets/speaker_small.svg';
import {Doc} from "../../../types";

//data. 애들 다 중괄호 씌우기

function LongDocument(props: {data:Doc}){
    return(
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
                {/*그냥 문서*/}
                {/*    <S.titleBox>*/}
                {/*    <img src={'/images/man.svg'} alt="아이콘" />*/}
                {/*    <S.title>*/}
                {/*        <span>data.title</span>*/}
                {/*        <S.date>data.date</S.date>*/}
                {/*    </S.title>*/}
                {/*</S.titleBox>*/}
                {/*    <S.titleBox>*/}
                {/*        <p>data.category</p>*/}
                {/*        <p>data.writer</p>*/}
                {/*    </S.titleBox>*/}

            </S.Document>
    )
}
export default LongDocument;