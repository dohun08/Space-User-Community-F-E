import React, {useState, useMemo} from "react";
import * as S from './style.ts';
import Header from "../../components/Header";
import Cbtn from "../../components/Button/Circle/";
import SearchSrc  from '../../assets/searchP.svg';
import {useNavigate} from "react-router-dom";
import PageScroll from "../../components/pageScroll";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom";

const BanManage = ()=>{
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState(['']);
    const auth = useRecoilValue(authAtom);
    const [loading, setLoading] = useState(true);

    const goBan = ()=>{
        navigate('/ban/user');
    }
    const searchUser = async ()=>{
        try{
            const response = await fetch(`/api/search/user/${user}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${auth.access_Token}`
                },
                credentials: 'include'
            });

            const data = await response.json();
            if(response.ok){
                setUserData(data);
            }

        }catch (error){
            console.log('on error search user : ', error);
        }
    }
    const banUser = async (name)=>{
        try{
            const response = await fetch(`/api/admin/ban/${name}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${auth.access_Token}`
                },
                credentials: 'include'
            });

            if(response.ok){
                searchUser(user);
            }

        }catch (error){
            console.log('on error post ban user : ', error);
        }finally {
            setLoading(false);
        }
    }

    const renderItems = useMemo(()=>{
        return Array.from({length:11}).map((_, index)=>{
            const item = userData[(page-1)*9 +index];
            return(item ? (<S.section key={item.username}>
                    <S.reportText>{item.username}</S.reportText>
                    <S.banBtn onClick={()=>banUser(item.username)} type={"button"} value={"차단"}></S.banBtn>
                </S.section>
            ) : (
                <S.unBox key={index}></S.unBox>
            ))
        })
    }, [page, userData]);
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
                            onKeyPress={Enter => Enter.key === 'Enter' && searchUser()}
                        />
                        <S.img onClick={searchUser} src = {SearchSrc} alt={"search icon"} />
                    </S.searchBox>
                    <Cbtn onClick={goBan} name={"밴 목록"}/>
                </S.BanBox>
                {renderItems}
                {!loading ? <PageScroll page={page} setPage={setPage} contentLength={userData.length/9} /> : null}

            </S.main>

        </S.container>
    )
}
export default BanManage;