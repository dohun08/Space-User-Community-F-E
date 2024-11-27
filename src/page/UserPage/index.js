import styled from "styled-components";
import Header from "../../components/Header";
import UserContent from "./UserContent";
import {useNavigate, useParams} from "react-router-dom";
import UserPostContent from "./UserPostContent";
import React, {useEffect, useState} from "react";
import ModifyPwd from "./ModifyPwd";
import {authAtom} from "../../recoil/authAtom";
import { useRecoilState } from 'recoil';
import Loading from "../../components/loading/loading";
import {getUserInfo} from "../../api/getUserInfo";

export default function UserPage(){
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const [isModifyPw, setIsModifyPw] = useState(false);
    const [auth, setAuth] = useRecoilState(authAtom);
    const isOwner = auth.username===id;
    const [data, setData] = useState({});

    const getInfo = async ()=>{
        setData(await getUserInfo(id));
    };

    useEffect(() => {
        getInfo();
    }, [id]);

    const updateUserInfo = async (formData, id) => {
        console.log(id);
        try{
            const response = await fetch('/api/user/update', {
                method: 'PATCH',
                headers: {
                    Authorization: `${auth.access_Token}`,
                },
                credentials: 'include',
                body: formData,
            })

            if(response.ok){
                setAuth((prev) => ({
                    ...prev,
                    access_Token: response.headers.get('authorization') || auth.access_Token,
                    username: id
                }));
                return 1;
            } else {
                const data = await response.json();
                alert(data["message"]);
                return 0;
            }
        } catch (err) {
            console.log(err);
            navigate('/error');
        }
    }

    return(
        <Container>
            <Header/>
            <Content>
                {isModifyPw ? (
                    <ModifyPwd profile={data["profile"]} isOwner={isOwner} update={updateUserInfo} id={id} onClick={() => setIsModifyPw((current)=> !current)}/>
                ):(
                    <>
                        <UserContent data={data} isOwner={isOwner} update={updateUserInfo} id={id} onClick={()=>setIsModifyPw(true)}/>
                        <UserPostContent isOwner={isOwner} id={id}/>
                    </>
                )}
            </Content>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`

const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    height: 80%;
    box-sizing: border-box;
`