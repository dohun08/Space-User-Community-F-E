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
    const [loading, setLoading] = useState<boolean>(true);
    const [content, setContent] = useState<Doc[]>([]);
    const [popular, setPopular] = useState<Doc[]>([]);
    const [broad, setBroad] = useState<Doc[]>([]);
    const fetchDoc = async ()=>{
        try{
            const documents:Doc[] = await getDoc("createdAt");
            const documents2:Doc[] = await getDoc("likes");
            const documents3: Doc[] = await getDoc("broad");
            console.log(documents);
            setPopular(documents2);
            setContent(documents);
            setBroad(documents3);
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
    const remainder = broad.length % 3 || 2;
    return(
        <S.container>
            <Header />
            <S.main>
                <S.section2>
                    <h3>인기 문서</h3>
                    {popular.length > 0 ? popular.slice(0, 10).map((doc, index)=>{
                        return (
                                <Popular data = {doc} key={doc.documentId} rank= {index}/>
                        )
                    }) : <p>인기 문서가 없습니다</p>}

                </S.section2>
                <S.section1>
                    {broad.length > 0 ?
                     Array.from ({ length: remainder }).map((_, index) => {
                         const doc = broad[index];
                         return doc ? (
                             <LongLongDocument data={doc} key={doc.documentId} />
                         ) : (
                             <S.unBox></S.unBox>
                         );
                     }) : <p>공지가 없습니다</p>
                    }
                    {content.length > 0 ?
                        Array.from({ length: 9-remainder }).map((_, index) => {
                            const doc = content[index];
                            return doc ? (
                                <LongLongDocument data={doc} key={doc.documentId} />
                            ) : (
                                <S.unBox></S.unBox>
                            );
                        }) : <p>문서가 없습니다</p>
                    }
                    {content.length > 0 ?
                    <Link to={'/more'}>더보기</Link>
                        : <div></div>}
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;