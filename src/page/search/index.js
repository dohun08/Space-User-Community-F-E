import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Larrow from '../../assets/left_arrow.svg';
import Rarrow from '../../assets/right_arrow.svg';
import LongLongDocument from "../../components/Documents/LongLong";
import {useParams} from 'react-router-dom';

import * as S from './style.ts';
function Search(){
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const params = useParams();

    const getSearch = async ()=>{
        console.log(params.title);
        try{
            const response = await fetch(`http://10.150.149.20:8080/search/doc/${params}`, {
                method:'GET'
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                setContent(data);
            }
        }catch (error){
            console.log("Search on : ", error);
        }
    }
    useEffect(() => {
        getSearch();
    }, []);
    return(
        <S.container>
            <Header />
            <S.ContentsBox>
                <LongLongDocument data={content} />
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
export default Search;