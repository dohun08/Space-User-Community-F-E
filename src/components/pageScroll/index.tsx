import * as S from "./style";
import Larrow from "../../assets/left_arrow.svg";
import Rarrow from "../../assets/right_arrow.svg";
import React from "react";

export default function PageScroll(props : {
    contentLength:number, page:number, setPage:React.Dispatch<React.SetStateAction<number>>}) {

    return (
        <S.pageNum>
            <S.arrow src={Larrow} alt={"왼쪽"} onClick={()=> {
                if(props.page === 1) return
                props.setPage(props.page - 1)
            }} />
            <p> {props.page} </p>
            <S.arrow src={Rarrow} alt={"오른쪽"} onClick={()=>{
                if(props.page === Math.ceil(props.contentLength)) return
                props.setPage(props.page+1)
            }} />
        </S.pageNum>
    )
}