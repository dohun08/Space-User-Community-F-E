import * as S from './style.ts'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "../User";

export default function UserContent({id, onClick}){
    const navigate = useNavigate();
    const [username, setUsername] = useState(id);
    const [description, setDescription] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [IsModifyName, setIsModifyName] = useState(false);
    const [IsModifyDescription, setIsModifyDescription] = useState(false);

    const getInfo = async ()=>{
        try{
            const response = await fetch(`/user/profile?${id}`, { method: 'GET' });

            if(response.ok){
                const data = await response.json();
                console.log("유저 조회 성공");
                setDescription(data["introduce"]);
                setCreatedAt(data["createdAt"]);
            }

        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }
    };


    useEffect(()=>{
        getInfo();
    }, [id])

    return (
        <S.Wrapper>
            <S.Content>
                <User
                    IsModify={IsModifyName}
                    username={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onClick={()=> setIsModifyName((current) => !current)}
                    modifiable={true}
                />
                <S.TextAreaBox isModify={IsModifyDescription} >
                    <S.TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <S.ModifyBtn align={"right"} color={IsModifyDescription} onClick={()=>setIsModifyDescription((current) => !current)}>{IsModifyDescription? "수정완료": "수정하기"}</S.ModifyBtn>
                </S.TextAreaBox>
                <S.UserInfo>
                    <div>User {username}</div>
                    <div>Role</div>
                    <div>Created At {createdAt}</div>
                </S.UserInfo>
                <S.ModifyBtn size={"16px"} align={"right"} color={true} onClick={onClick}>비밀번호 변경하기</S.ModifyBtn>
            </S.Content>
        </S.Wrapper>
    );
}
