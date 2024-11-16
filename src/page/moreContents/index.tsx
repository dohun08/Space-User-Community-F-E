import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import LongLongDocument from "../../components/Documents/LongLong";
import * as S from './style';
import {Doc} from '../../types';
import {getDoc} from '../../api/getDoc';
import Loading from "../../components/loading/loading";
import PageScroll from "../../components/pageScroll";

function MoreContents(){
    const [content, setContent] = useState<Doc[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const fetchDoc = async ()=>{
        try{
            const documents:Doc[] = await getDoc("createdAt");
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
                    {Array.from({ length: 9 }).map((_, index) => {
                            const item = content[(page - 1) * 9 + index];
                            return item ? (
                                    <LongLongDocument data={item} key={item.id}/>
                            ) : (
                            <S.unBox key={index} />
                        );
                    })}
                    <PageScroll page={page} setPage={setPage} contentLength={content.length/9} />
                </S.ContentsBox> : <Loading></Loading>
            }

        </S.container>
    )
}
export default MoreContents;