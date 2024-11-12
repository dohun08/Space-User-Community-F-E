import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import Larrow from '../../assets/left_arrow.svg';
import Rarrow from '../../assets/right_arrow.svg';
import LongLongDocument from "../../components/Documents/LongLong";
import {useParams} from 'react-router-dom';
import * as S from './style';
import {Doc} from "../../types";
import Loading from "../../components/loading/loading";

function Search(){
    const [content, setContent] = useState<Doc[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();


    const getSearch = async ()=>{
        try{
            const response = await fetch(`http://10.150.149.20:8080/search/doc/${params.title}`, {
                method:'GET'
            });
            const data = await response.json();
            if (response.ok) {
                setContent((data.data));
            }
        }catch (error){
            console.log("Search on : ", error);
        }finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getSearch();
        console.log(content);
    }, [content]);
    return(
        <S.container>
            <Header />
            <S.ContentsBox>
                {isLoading ? (
                    <Loading />
                ) : (
                    Array.from({ length: 9 }).map((_, index) => {
                        const item = content[(page - 1) * 9 + index];
                        return item ? (
                            <div key={index}>
                                <LongLongDocument data={item} />
                            </div>
                        ) : (
                            <S.unBox key={index} />
                        );
                    })
                )}


                <S.pageNum>
                    <S.arrow src={Larrow} alt={"왼쪽"} onClick={()=> {
                        if(page === 1) return
                        setPage(page - 1)
                    }} />
                    <p> {page} </p>
                    <S.arrow src={Rarrow} alt={"오른쪽"} onClick={()=>{
                        if(page === Math.ceil(content.length/9)) return
                        setPage(page+1)
                    }} />
                </S.pageNum>
            </S.ContentsBox>
        </S.container>
    )
}
export default Search;