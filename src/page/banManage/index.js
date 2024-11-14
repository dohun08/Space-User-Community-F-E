import React, {useState, useEffect} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import Cbtn from "../../components/Button/Circle/";
import SearchSrc  from '../../assets/searchP.svg';
import {useNavigate} from "react-router-dom";
import PageScroll from "../../components/pageScroll";

const BanManage = ()=>{
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState(['']);
    const getData = async ()=>{
        try{
            const response = await fetch('/admin/banlist', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(response.ok){
                const data = await response.json();
                setUserData(data);
            }
            else{
                console.log("밴 데이터 받아오는데 오류남");
            }
        }catch (error){
            console.log('error on getBanData', error);
        }
    }
    useEffect(() => {
        getData()
    }, []);
    const goBan = ()=>{
        navigate('/ban/user');
    }
    const searchUser = ()=>{

    }
    const banUser = async ()=>{
        try{
            const response = await fetch('/admin/ban', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    // user:userid
                })
            });

        }catch (error){
            console.log('on error post ban user : ', error);
        }
    }

    return(
        <S.container>
            <Header />
            <S.main>
                <S.BanBox>
                    <S.searchBox>
                        <S.search
                            type={"text"}
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder={"유저를 입력해주세요"}
                        />
                        <img onClick={searchUser} src = {SearchSrc} alt={"search icon"} />
                    </S.searchBox>
                    <Cbtn onClick={goBan} name={"밴 목록"}/>
                </S.BanBox>
                <S.section >
                    <S.reportText>유저이름</S.reportText>
                    <S.banBtn onClick={banUser} type={"button"} value={"차단"}></S.banBtn>
                </S.section>
                <PageScroll page={page} setPage={setPage} contentLength={userData.length/9} />
            </S.main>

        </S.container>
    )
}
export default BanManage;