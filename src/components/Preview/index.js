import React from "react";
import * as S from "./style.ts";

export const Preview = ({category, title, content, imgSrc})=>{

    return (
        <S.outPut>
            <S.categoryOut>{category}</S.categoryOut>
            <S.title>
                <S.selectImg $toggle = {false}>
                    <img src={imgSrc} alt='선택된 이미지'/>
                </S.selectImg>
                <S.H1>{title}</S.H1>
            </S.title>
            <S.outContent>{content}</S.outContent>
        </S.outPut>
    )
}