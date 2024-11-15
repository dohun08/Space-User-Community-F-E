import React, {useEffect, useState} from "react";
import * as S from './style';
import Header from "../../components/Header";
import Popular from "../../components/Documents/popular";
import { Link } from "react-router-dom";
import {Doc} from '../../types';
import {getDoc} from '../../api/getDoc';
import LongLongDocument from "../../components/Documents/LongLong";
import Loading from "../../components/loading/loading";

function Main(){
    const [loading, setLoading] = useState<boolean>(false);
    const [content, setContent] = useState<Doc[]>([]);
    const [popular, setPopular] = useState<Doc[]>([]);
    const fetchDoc = async ()=>{
        setLoading(false);
        try{
            const documents:Doc[] = await getDoc("createdAt");
            const documents2:Doc[] = await getDoc("likes");
            setPopular(documents2);
            setContent(documents);
        }catch (err) {
            console.log('Failed to load documents');
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchDoc();
    }, []);

    if(loading) return (
        <Loading></Loading>
    )

    return(
        <S.container>
            <Header />
            <S.main>
                <S.section2>
                    <h3>인기 문서</h3>
                    {popular && popular.slice(0, 8).map((doc)=>{
                        return (
                                <Popular data = {doc} key={doc.id}/>
                        )
                    })}

                </S.section2>
                <S.section1>
                    {content && Array.from({length:9}).map((_, index)=>{
                        const doc = content[index];
                        return doc ? (
                                <LongLongDocument data={doc} key={doc.id}/>

                        ) : (
                            <S.unBox key = {index}></S.unBox>
                        )
                    })}
                    <Link to={'/more'}>더보기</Link>
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;