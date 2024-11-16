import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import * as S from './style.ts';
import Speaker from '../../assets/speaker.svg';
import {authAtom} from "../../recoil/authAtom";
import {useRecoilValue} from "recoil";
import PageScroll from "../../components/pageScroll";

const Report = ()=>{
    const [page, setPage] = useState(1);
    const [report, setReport] = useState(['']);
    const auth = useRecoilValue(authAtom);

    const getReport = async ()=>{
        try{
            const response = await fetch('/api/admin/report', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': auth.access_Token
                }
            })
            if(response.ok){
                const data = await response.json();
                console.log(data);
                setReport(data.data);
            }
        }catch (error){
            console.log('on error getReport', error);
        }
    }
    useEffect(() => {
        getReport()
    }, []);
    return(
        <S.container>
            <Header />
            <S.main>
                <S.speaker src={Speaker} alt={"speaker icon"} />
                {/* 9개 신고씩 보여주기 */}
                {Array.from({length:9}).map((_, index)=>{
                    const item = report[(page-1)*9 + index];
                    return item ? (
                        <S.section>
                            <S.reportText to={`/report/manage/${1}`}>신고제목</S.reportText>
                            <S.reportText to={`/user/${'username'}`}>유저</S.reportText>
                        </S.section>
                    ):( <S.unBox></S.unBox>
                    )
                })}

                <PageScroll page={page} setPage={setPage} contentLength={report.length/9} />
            </S.main>
        </S.container>
    )
}

export default Report;