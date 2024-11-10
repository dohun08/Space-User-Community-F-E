import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Larrow from '../../assets/left_arrow.svg';
import Rarrow from '../../assets/right_arrow.svg';
import LongLongDocument from "../../components/Documents/LongLong";
import * as S from './style';
import {Doc} from '../../types';

function MoreContents(){
    const [content, setContent] = useState<Doc[]>([]);
    const [page, setPage] = useState(1);
    const getData = async ()=>{
        try{
            const response = await fetch(`/community/doclists`, {
                method:'GET',
            })
            const data = await response.json();
            if(response.ok){
                setContent(data.data);
                console.log(data);
            }
        }catch (error){
            console.log("on error get more Data", error);
        }
    }
    useEffect(() => {
        getData();
    }, [page]);
    return(
        <S.container>
            <Header />
            <S.ContentsBox>
                <LongLongDocument data={content[0]} />
                {/* 9개 최대 */}

                <S.pageNum>
                    <S.arrow src={Larrow} alt={"왼쪽"} onClick={()=>setPage(page+1)} />
                    <p> page </p>{/*page 중괄호 씌우기*/}
                    <S.arrow src={Rarrow} alt={"오른쪽"} onClick={()=>setPage(page-1)} />
                </S.pageNum>
            </S.ContentsBox>
        </S.container>
    )
}
export default MoreContents;