import styled from "styled-components";
import Header from "../../components/Header";
import UserContent from "./UserContent";
import {useNavigate, useParams} from "react-router-dom";
import UserPostContent from "./UserPostContent";
import {useState} from "react";
import ModifyPwd from "./ModifyPwd";
import {authAtom} from "../../recoil/authAtom";
import { useRecoilState } from 'recoil';

export default function UserPage(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [isModifyPw, setIsModifyPw] = useState(false);
    const [auth, setAuth] = useRecoilState(authAtom);


    const updateUserInfo = async (formData, id) => {
        try{
            const response = await fetch('/api/user/update', {
                method: 'PATCH',
                headers: {
                    Authorization: `${auth.access_Token}`,
                },
                body: formData,
            })

            if(response.ok){
                navigate(`/user/${id}`);
                setAuth({
                    access_Token: response.headers.get('authorization') || '',
                    username: id
                })
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
                    <ModifyPwd update={updateUserInfo} id={id} onClick={() => setIsModifyPw((current)=> !current)}/>
                ):(
                    <>
                        <UserContent update={updateUserInfo} id={id} onClick={()=>setIsModifyPw(true)}/>
                        <UserPostContent id={id}/>
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