import React from "react";
import * as S from './style.ts';

export default function Loading (){
    return(
        <S.container>
            <S.Box>
                <S.Loading src={"/images/blue_spaceship.svg"} alt={"우주선"}/>
            </S.Box>
            <p>로딩중</p>
        </S.container>

    )
}