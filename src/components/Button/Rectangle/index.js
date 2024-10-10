import * as S from './style.ts'
import React from 'react';
function Rectangle(props){
    return(
        <S.Rbtn>
            <S.name>{props.name}</S.name>
        </S.Rbtn>
    )
}
export default Rectangle;
