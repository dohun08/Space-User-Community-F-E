import React, {useState, useEffect} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import Cbtn from "../../components/Button/Circle/";
import SearchSrc  from '../../assets/searchP.svg';
import Larrow from "../../assets/left_arrow.svg";
import Rarrow from "../../assets/right_arrow.svg";
import {useNavigation} from "react-router-dom";

const BanManage = ()=>{
    const navigate = useNavigation();
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
    const [user, setUser] = useState('');
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
                <S.pageNum>
                    <S.arrow src={Larrow} alt={"왼쪽"} />
                    <p> page </p>{/*page 중괄호 씌우기*/}
                    <S.arrow src={Rarrow} alt={"오른쪽"}  />
                </S.pageNum>
            </S.main>

        </S.container>
    )
}
export default BanManage;