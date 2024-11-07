import React from "react";
import Header from "../../components/Header";
import * as S from './style.ts';
import BackArrow from '../../assets/back_Arrow.svg';

const DetailedReport = ()=>{
    const back = (url)=>{
        window.location.href = url;
    }
    return(
        <S.container>
            <Header />
            <S.main>
                <S.ReportInfo>
                    <S.backArrow onClick={()=>back('/report')}>
                        <img src={BackArrow} alt={'뒤로가기'}/>
                    </S.backArrow>
                    <S.ReportText>신고합니다</S.ReportText>
                    <div></div>
                </S.ReportInfo>

                <S.title>제목</S.title>
                <S.content>내용</S.content>
            </S.main>
        </S.container>
    )
}
export default DetailedReport;