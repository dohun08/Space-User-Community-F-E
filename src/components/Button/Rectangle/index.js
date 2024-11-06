import * as S from './style.ts'
import React from 'react';
function Rectangle(props){
    return(
        <S.Rbtn width={props.width} height={props.height} borderRadius={props.borderRadius}>
            <S.name size={props.size}>{props.name}</S.name>
        </S.Rbtn>
    )
}
export default Rectangle;
