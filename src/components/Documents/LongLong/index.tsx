import * as S from './style';
import React, {useEffect} from "react";
import {Doc} from "../../../types";

function LongLong(props : {data:Doc}){
    let date;
    useEffect(()=>{
        setTimeout(() => {console.log(props.data)},0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        date = props.data.createdAt.slice(0, 10);
    }, [props.data]);
    return(
        <S.Document>
            <S.titleBox>
                <img src={"/images/man.svg"} alt="우주선1" />
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