import * as S from './style.ts'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "../User";

export default function UserContent({id, onClick, update}){
    const navigate = useNavigate();
    const [username, setUsername] = useState(id);
    const [introduce, setIntroduce] = useState("");
    const [profile, setProfile] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [IsModifyName, setIsModifyName] = useState(false);
    const [IsModifyIntroduce, setIsModifyIntroduce] = useState(false);

    const getInfo = async ()=>{
        try{
            const response = await fetch(`/api/user/profile/${id}`, {
                method: 'GET',
            });

            if(response.ok){
                const data = await response.json();
                console.log("유저 조회 성공");
                setIntroduce(data["introduce"]);
                setCreatedAt(data["createdAt"]);
                setProfile(data["profile"]);
            }

        }catch(error){
            console.log("error on : ",error);
            navigate("/error");
        }
    };

    const modifyNameHandler = async () => {
        if(IsModifyName){
            const formData = new FormData();
            const blob = new Blob([JSON.stringify({ username })], { type: "application/json" });
            formData.append("updateDTO", blob);
            if(!(await update(formData, username))){
                return;
            }
        }
        setIsModifyName((current) => !current);
    }

    const modifyIntroduceHandler = async () => {
        if(IsModifyIntroduce){
            const formData = new FormData();
            const blob = new Blob([JSON.stringify({ introduce })], { type: "application/json" });
            formData.append("updateDTO", blob);
            if(!(await update(formData, username))){
                return;
            }
        }
        setIntroduce((current) => !current);
    }

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
                    onClick={modifyNameHandler}
                    modifiable={true}
                    profile={profile}
                />
                <S.TextAreaBox isModify={IsModifyIntroduce} >
                    <S.TextArea
                        value={introduce}
                        onChange={modifyIntroduceHandler}
                    />
                    <S.ModifyBtn align={"right"} color={IsModifyIntroduce} onClick={()=>setIsModifyIntroduce((current) => !current)}>{IsModifyIntroduce? "수정완료": "수정하기"}</S.ModifyBtn>
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
