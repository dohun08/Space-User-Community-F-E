import * as S from './style.ts'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "../User";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../../recoil/authAtom";

export default function UserContent({id, onClick, update, isOwner, data}){
    
    const getAuth = useRecoilValue(authAtom);
    const navigate = useNavigate();
    const [username, setUsername] = useState(id);
    const [introduce, setIntroduce] = useState("");
    const [profile, setProfile] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [IsModifyName, setIsModifyName] = useState(false);
    const [IsModifyIntroduce, setIsModifyIntroduce] = useState(false);

    const modifyNameHandler = async () => {
        if(IsModifyName){
            if(username.trim() === ""){
                return;
            }
            const formData = new FormData();
            const blob = new Blob([JSON.stringify({ username })], { type: "application/json" });
            formData.append("userUpdate", blob);
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
            formData.append("userUpdate", blob);
            
            if(!(await update(formData, username))){
                return;
            }
        }
        setIsModifyIntroduce((current) => !current);
    }

    const modifyProfileHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        if (!file) {
            alert("파일을 선택하지 않았습니다.");
            return;
        }

        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedImageTypes.includes(file.type)) {
            alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
            return;
        }

        const formData = new FormData();
        console.log(formData);
        formData.append("profile", file);
        const blob = new Blob([JSON.stringify({})], { type: "application/json" });
        formData.append("userUpdate", blob);
        if(!(await update(formData, username))) {
            alert("업로드 중 오류가 발생했습니다.")
        }
    }

    useEffect(()=>{
        
        if(data){
            setIntroduce(data["introduce"] || "");
            setProfile(data["profile"] || "");
            setCreatedAt(data["date"] || "");
        }
    }, [id, data])

    return (
        <S.Wrapper>
            <S.Content>
                <User
                    IsModify={IsModifyName}
                    username={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onClick={modifyNameHandler}
                    modifiable={isOwner}
                    profile={profile}
                    updateProfile={modifyProfileHandler}
                />
                <S.TextAreaBox isModify={IsModifyIntroduce} >
                    <S.TextArea
                        value={introduce}
                        onChange={(e) => setIntroduce(e.target.value)}
                        readOnly={!IsModifyIntroduce}
                    />
                    {isOwner? <S.ModifyBtn align={"right"} color={IsModifyIntroduce} onClick={modifyIntroduceHandler}>{IsModifyIntroduce? "수정완료": "수정하기"}</S.ModifyBtn> : null}
                </S.TextAreaBox>
                <S.UserInfo>
                    <div>User {username}</div>
                    <div>Role {getAuth.isAdmin? "Admin":"User"}</div>
                    <div>Created At {createdAt.slice(0, 10)}</div>
                </S.UserInfo>
                {isOwner? <S.ModifyBtn size={"16px"} align={"right"} color={true} onClick={onClick}>비밀번호 변경하기</S.ModifyBtn>:<></>}
            </S.Content>
        </S.Wrapper>
    );
}
