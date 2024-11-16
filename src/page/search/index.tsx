import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import LongLongDocument from "../../components/Documents/LongLong";
import {useParams} from 'react-router-dom';
import * as S from './style';
import Loading from "../../components/loading/loading";
import PageScroll from "../../components/pageScroll";
import {Doc} from "../../types";

function Search(){
    const [content, setContent] = useState<Doc[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();


    const getSearch = async ()=>{
        try{
            const response = await fetch(`/api/search/doc/${params.title}`, {
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
        console.log(content)
    }, [params.title]);
    return(
        <S.container>
            <Header />

            <S.ContentsBox>
                {isLoading ? (
                    <Loading />
                ) : (content.length === 0 ?
                            <S.noData>{params.title}의 결과가 없습니다.</S.noData>
                         :
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
                {content.length === 0 ?
                    <PageScroll page={page} setPage={setPage} contentLength={1} />
                    :                 <PageScroll page={page} setPage={setPage} contentLength={content.length/9} />
            }
            </S.ContentsBox>
        </S.container>
    )
}
export default Search;