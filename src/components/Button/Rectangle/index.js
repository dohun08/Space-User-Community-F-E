import * as S from './style.ts'
import React from 'react';
function Rectangle({width, height, name, size, borderRadius, onClick, display}) {
    return(
        <S.Rbtn display={display} width={width} height={height} borderRadius={borderRadius} onClick={onClick}>
            <S.name size={size}>{name}</S.name>
        </S.Rbtn>
    )
}
export default Rectangle;
