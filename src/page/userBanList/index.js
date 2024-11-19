import React, {useEffect, useState} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import PageScroll from "../../components/pageScroll";
import BackArrow from "../../assets/back_Arrow.svg";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom";

const UserBan = ()=>{
    const [page, setPage] = useState(1);
    const [userData, setUserData] = useState(['']);
    const auth = useRecoilValue(authAtom);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const getUserData = async ()=>{
        try{
            const response = await fetch('/api/admin/banlist', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${auth.access_Token}`
                }
            })
            const data = await response.json();

            if(response.ok){
                setUserData(data);
            }
        }catch (error){
            console.log("getUserBanData error : ",error);
        }finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getUserData();
    }, [page]);
    const unBan = async (name)=>{
        try{
            const response = await fetch(`/api/admin/unban/${name}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${auth.access_Token}`
                },
                credentials: 'include'
            })

            if(response.ok){
                getUserData();
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
                                <S.save onClick={() => unBan(item.username)} type={"button"}>살리기</S.save>
                                <S.die type={"button"}>죽이기</S.die>
                            </S.buttonBox>
                        </S.section>
                    ) : (
                        <S.unBox key={index}/>
                    );
                })}
                {!loading ?
                    <PageScroll page={page} setPage={setPage} contentLength={userData.length / 9}/> : null
                }
            </S.main>
        </S.container>
    )
}
export default UserBan;