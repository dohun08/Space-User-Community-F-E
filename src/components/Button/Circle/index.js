import * as S from './style.ts'
import React from 'react';
function Circle(props){
    return(
        <S.Cbtn onClick={props.onClick}>
            <S.name>{props.name}</S.name>
        </S.Cbtn>
    )
}
export default Circle;

