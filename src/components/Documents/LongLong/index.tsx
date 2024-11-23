import * as S from './style';
import React, {useEffect} from "react";
import {Doc} from "../../../types";
import {images} from "../../../assets/iconImage";
import Speaker from "../../../assets/speaker.svg"

function LongLong(props : {data:Doc}){
    const [Date, setDate] = React.useState("");

    useEffect(() => {
        setDate(props.data.date.slice(0, 10));
    }, []);
    return(
        props.data.category === "공지" ?
            <S.broadcast>
                <S.titleBox>
                    <S.img>
                        <img src={Speaker} alt="우주선1" width={'100%'}/>
                    </S.img>
                    <S.title>
                        <S.LinkBtn to={`/post/${props.data.id}`}>{props.data.title}</S.LinkBtn>
                        <S.date>{Date}</S.date>
                    </S.title>
                </S.titleBox>
                <S.Contenttype>
                    <p>{props.data.category}</p>
                    <S.LinkBtn to={`/user/${props.data.userId}`}>{props.data.authorName}</S.LinkBtn>
                </S.Contenttype>
            </S.broadcast> :
            <S.Document>
                <S.titleBox>
                    <S.img>
                        <img src={images[props.data.icon]} alt="우주선1" width={'100%'}/>
                    </S.img>
                    <S.title>
                        <S.LinkBtn to={`/post/${props.data.id}`}>{props.data.title}</S.LinkBtn>
                        <S.date>{Date}</S.date>
                    </S.title>
                </S.titleBox>
                <S.Contenttype>
                    <p>{props.data.category}</p>
                    <S.LinkBtn to={`/user/${props.data.userId}`}>{props.data.authorName}</S.LinkBtn>
                </S.Contenttype>
            </S.Document>
    )
}
export default LongLong;