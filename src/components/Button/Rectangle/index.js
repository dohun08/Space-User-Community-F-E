import * as S from './style.ts'
import React from 'react';
function Rectangle({width, height, name, size, borderRadius, onClick, type, htmlFor}) {
    return(
        <S.Rbtn as={type||"div"} htmlFor={htmlFor} width={width} height={height} borderRadius={borderRadius} onClick={onClick}>
            <S.name size={size}>{name}</S.name>
        </S.Rbtn>
    )
}
export default Rectangle;
