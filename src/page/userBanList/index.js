import React, {useEffect, useState} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import PageScroll from "../../components/pageScroll";
import BackArrow from "../../assets/back_Arrow.svg";
import {useNavigate} from "react-router-dom";

const UserBan = ()=>{
    const [page, setPage] = useState(1);
    const [userData, setUserData] = useState(['']);
    const navigate = useNavigate();
    const getUserData = async ()=>{
        try{
            const response = await fetch('/api/admin/banlist', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                }
            })
            if(response.ok){
                const data = await response.json();
                setUserData(data.data);
            }
        }catch (error){
            console.log("getUserBanData error : ",error);
        }
    }
    useEffect(() => {
        getUserData();
    }, []);
    const unBan = async ()=>{
        try{
            const response = await fetch('/admin/unban', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    //userid
                })
            })
            const data = await response.json();
            if(response.ok){
                setUserData(data);
            }
        }catch (error){
            console.log('on error unban : ', error);
        }
    }
    return(
        <S.container>
            <Header/>
            <S.main>
                <h2>밴된 유저 목록</h2>
                <S.backArrow src={BackArrow} alt="Back Arrow" onClick={() => navigate(-1)}/>

                {Array.from({length: 10}).map((_, index) => {
                    const item = userData[(page - 1) * 9 + index];
                    return item ? (
                        <S.section key={item.id}>
                            <p>{item.username}</p>
                            <S.buttonBox>
                                <S.save onClick={unBan} type={"button"}>살리기</S.save>
                                <S.die type={"button"}>죽이기</S.die>
                            </S.buttonBox>
                        </S.section>
                    ) : (
                        <S.unBox key={index}/>
                    );
                })}
                <PageScroll page={page} setPage={setPage} contentLength={userData.length / 9}/>
            </S.main>
        </S.container>
    )
}
export default UserBan;