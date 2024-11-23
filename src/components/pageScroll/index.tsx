import * as S from "./style";
import Larrow from "../../assets/left_arrow.svg";
import Rarrow from "../../assets/right_arrow.svg";
import React, {useEffect, useState} from "react";

export default function PageScroll(props : {
    contentLength:number, page:number, setPage:React.Dispatch<React.SetStateAction<number>>}) {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(true);
    useEffect(() => {
        if(props.page === 1) setLeft(false);
        else setLeft(true);
        if(props.page === Math.ceil(props.contentLength)) setRight(false);
        else setRight(true);
        console.log(Math.ceil(props.contentLength))
    }, [props.page]);
    return (
        <S.pageNum>
            {left ? <S.arrow $active={left} src={Larrow} alt={"왼쪽"} onClick={()=> {props.setPage(props.page - 1)}} />
                :
                <S.unBox></S.unBox>}
            <p> {props.page} </p>
            {right ? <S.arrow $active={right} src={Rarrow} alt={"오른쪽"} onClick={()=>{props.setPage(props.page+1)}} />
                : <S.unBox></S.unBox>}
        </S.pageNum>
    )
}