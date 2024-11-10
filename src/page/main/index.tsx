import {useEffect, useState} from "react";
import * as S from './style';
import Header from "../../components/Header";
import LongDocument from "../../components/Documents/Long";
import Popular from "../../components/Documents/popular";
import { Link } from "react-router-dom";
import {Doc} from '../../types';

function Main(){

    const [content, setContent] = useState<Doc[]>([]);
    const getDocument = async ()=>{
        try{
            const response = await fetch(`/community/doc`, {
                method:'GET',
            })
            const data = await response.json();
            if(response.ok){
                setContent(data.data);
                console.log(data.data)
            }
        }catch (error){
            console.log("Document error :" , error);
        }
    };
    useEffect(()=>{
        getDocument();
    }, []);
    return(
        <S.container>
            <Header />
            <S.main>
                <S.section2>
                    <h3>인기 문서</h3>
                    <Popular data = {content[0]} />
                </S.section2>
                <S.section1>
                    <LongDocument data = {content[0]}  />
                    
                    <Link to={'/more'}>더보기</Link>
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;