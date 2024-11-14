import * as S from './style';
import React, {useEffect, useState} from "react";
import {Doc} from "../../../types";
import {images} from "../../../assets/iconImage";

function LongLong(props : {data:Doc}){
    let date:string = "";
    const [icon, setIcon] = useState(0);

    useEffect(()=>{
        // if (props.data?.createdAt) {
        //     const formattedDate:string = props.data.createdAt.slice(0, 10);
        //     date = formattedDate;
        // }
        if (props.data?.icon) {
            const temp = props.data.icon.slice(4);
            setIcon(parseInt(temp));
        }
    }, [props.data.icon]);

    return(
        <S.Document>
            <S.titleBox>
                <S.img>
                    <img src={images[icon]} alt="우주선1" width={'100%'}/>
                </S.img>
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