import * as S from './style';
import React, {useEffect} from "react";
import {Doc} from "../../../types";

function LongLong(props : {data:Doc}){
    let date;
    let icon:number = 0;
    const images = [
        "/images/blue_spaceship.svg",
        "/images/mint_spaceship.svg",
        "/images/pink_spaceship.svg",
        "/images/spaceship.svg",
        "/images/jellyfish.svg",
        "/images/nimo.svg",
        "/images/tuttle.svg",
        "/images/light_blue.svg",
        "/images/light_green.svg",
        "/images/light_orange.svg",
        "/images/light_red.svg",
        "/images/light_yellow.svg",
        "/images/light-black.svg",
        "/images/man.svg",
        "/images/woman.svg"
    ]
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        date = props.data.createdAt.slice(0, 10);
        console.log(date);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        icon = parseInt(props.data.icon.slice(4, 5), 10);

    }, []);

    return(
        <S.Document>
            <S.titleBox>
                <img src={images[icon]} alt="우주선1" />
                <S.title>
                    <S.LinkBtn to={`/post/${props.data.id}`}>{props.data.title}</S.LinkBtn>
                    <S.date>{date}</S.date>
                </S.title>
            </S.titleBox>
            <S.Contenttype>
                <p>{props.data.category}</p>
                <S.LinkBtn to={`/user/${props.data.userId}`}>{props.data.userId}</S.LinkBtn>
            </S.Contenttype>
        </S.Document>
    )
}
export default LongLong;