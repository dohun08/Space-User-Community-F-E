import * as S from './style'
import React from 'react';
function Circle(props : {name: string, onClick: () => void}){
    return(
        <S.Cbtn onClick={props.onClick}>
            <S.name>{props.name}</S.name>
        </S.Cbtn>
    )
}
export default Circle;

