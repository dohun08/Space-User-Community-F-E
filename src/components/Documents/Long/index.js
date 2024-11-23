import React from "react";
import * as S from './style.ts';
import Speaker from '../../../assets/speaker_small.svg';
import {postInfo} from "./style.ts";
import {useNavigate} from "react-router-dom";
//data. 애들 다 중괄호 씌우기

function LongDocument({data, isMain}){
    const navigate = useNavigate();
    return(
        <>{data.category === "공지" ?(
            <S.Document manage={true}>
            <S.titleBox>
            <img src={Speaker} alt="공지" />
            <S.title>
            <span>{data.title}</span>
            <S.date>{data.date}</S.date>
            </S.title>
            </S.titleBox>
            <S.titleBox>
            <p>공지</p>
            <p>관리자</p>
            </S.titleBox>
            </S.Document>
            ) :(
              <S.Document manage={false}>
        <S.titleBox>
            <img src={`/images/man.svg`} alt="우주선1" />
            <S.title>
                <span>{data.title}</span>
                <S.date>{data.date}</S.date>
            </S.title>
        </S.titleBox>
        <S.infoBox>
            <S.postInfo>{data.category}</S.postInfo>
            <S.postInfo onClick={()=> (isMain? (navigate(`/user/${data.writer}`)) : navigate(`/write`))}>{isMain? data.writer:"수정하기"}</S.postInfo>
        </S.infoBox>
        </S.Document>
        )}


        </>
    )
}
export default LongDocument;