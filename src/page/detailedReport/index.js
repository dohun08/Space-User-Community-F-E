import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import * as S from './style.ts';
import BackArrow from '../../assets/back_Arrow.svg';
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../recoil/authAtom";
import Cbtn from "../../components/Button/Circle";

const DetailedReport = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const [data, setData] = useState([]);

    const back = (url)=>{
        navigate(url);
    }
    const getData = async()=>{
        try{
            const response = await fetch(`/api/admin/report/${params.id}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': auth.access_Token
                },
                credentials: 'include'
            });

            const data = await response.json();
            if(response.ok){
                console.log(data);
                setData(data);
            }

        }catch (error){
            console.log('on error getReport', error);
        }
    }
    const completeReport = async ()=>{
        try{
            const response = await fetch('/api/admin/report/complete', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': auth.access_Token
                },
                credentials: 'include',
                body:JSON.stringify({
                    id:params.id
                })
            });
            if(response.ok){
                navigate('/report/manage');
            }
        }catch (error){
            console.log('on error getReport', error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return(
        <S.container>
            <Header />
            <S.main>
                <S.ReportInfo>
                    <S.backArrow onClick={()=>back('/report/manage')}>
                        <img src={BackArrow} alt={'뒤로가기'}/>
                    </S.backArrow>
                    <S.ReportText>신고합니다</S.ReportText>
                    <div></div>
                </S.ReportInfo>

                <S.title>{data.title}</S.title>
                <S.content>{data.contents}</S.content>
                <S.complete>
                    <Cbtn name={"처리완료"} onClick={()=>completeReport} />
                </S.complete>
            </S.main>
        </S.container>
    )
}
export default DetailedReport;