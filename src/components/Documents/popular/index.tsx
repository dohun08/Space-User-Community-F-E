import React from "react";
import * as S from './style'
import {Doc} from '../../../types/index';

function Popular(props: {data:Doc}){
    return(
        <S.content>
            <S.title>props.title</S.title>
            <S.writer>props.writer</S.writer>
        </S.content>
    )
}
export default Popular;