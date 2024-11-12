import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Larrow from '../../assets/left_arrow.svg';
import Rarrow from '../../assets/right_arrow.svg';
import LongLongDocument from "../../components/Documents/LongLong";
import * as S from './style';
import {Doc} from '../../types';
import {getDoc} from '../../api/getDoc';
import Loading from "../../components/loading/loading";
import {unBox} from "./style";

function MoreContents(){
    const [content, setContent] = useState<Doc[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const fetchDoc = async ()=>{
        try{
            const documents:Doc[] = await getDoc();
            setContent(documents);
        }catch (error){
            console.log("on error get more Data", error);
        }finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchDoc();
    }, []);
    return(
        <S.container>
            <Header />
            {!isLoading ?
                <S.ContentsBox>
                    {content.slice((page-1)*9, page*9).map((doc:Doc, index:number)=>{
                        return doc ? (
                            <LongLongDocument key={index} data={doc} />
                        ) : (
                            <S.unBox key={index}></S.unBox>
                        );
                    })}

                    <S.pageNum>
                        <S.arrow src={Larrow} alt={"왼쪽"} onClick={()=> {
                            if(page === 1) return
                            setPage(page - 1)
                        }} />
                        <p> page </p>{/*page 중괄호 씌우기*/}
                        <S.arrow src={Rarrow} alt={"오른쪽"} onClick={()=>{
                            if(page === Math.ceil(content.length/9)) return
                            setPage(page+1)
                        }} />
                    </S.pageNum>
                </S.ContentsBox> : <Loading></Loading>
            }

        </S.container>
    )
}
export default MoreContents;