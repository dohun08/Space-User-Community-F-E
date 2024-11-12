import React, {useEffect, useState} from "react";
import * as S from './style';
import Header from "../../components/Header";
import LongDocument from "../../components/Documents/Long";
import Popular from "../../components/Documents/popular";
import { Link } from "react-router-dom";
import {Doc} from '../../types';
import {getDoc} from '../../api/getDoc';
import LongLongDocument from "../../components/Documents/LongLong";
import Loading from "../../components/loading/loading";

function Main(){
    const [loading, setLoading] = useState<boolean>(true);
    const [content, setContent] = useState<Doc[]>([]);
    const fetchDoc = async ()=>{
        setLoading(true);
        try{
            const documents:Doc[] = await getDoc();
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
                    {/*맵함수를 이용해서 문서 나타내기, 인기문서는 객체의 sort 이용해서 정렬하기*/}
                    <Popular data = {content[0]} />
                </S.section2>
                <S.section1>
                    {content.slice(0, 9).map((doc)=>{
                        return (
                            <LongLongDocument data={doc} />)
                    })}
                    <Link to={'/more'}>더보기</Link>
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;