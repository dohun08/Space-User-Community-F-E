import { useEffect, useState } from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import LongDocument from "../../components/Documents/Long";
import Popular from "../../components/Documents/popular/index.js";
import { Link } from "react-router-dom";

function Main(){
    const [isLogin, setIsLogin] = useState();
    const getDocument = async ()=>{
        
    };
    useEffect(()=>{
        getDocument();
    }, []);
    return(
        <S.container>
            {/* isLogin에 받아온 isLogin 값 넣기 */}
            <Header isLogin = {false}/>
            <S.main>
                <S.section2>
                    <h3>인기 문서</h3>
                    <Popular />
                    
                </S.section2>
                <S.section1>  
                    <LongDocument />
                    
                    <Link to={'/more'}>더보기</Link>
                </S.section1>
            </S.main>
        </S.container>
    )
}
export default Main;