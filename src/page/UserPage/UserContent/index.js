import * as S from './style.ts'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function UserContent({id}){
    const navigate = useNavigate();
    const [username, setUsername] = useState(id);
    const [createdAt, setCreatedAt] = useState("");
    const [IsModifyName, setIsModifyName] = useState(false);
    const [IsModifyDescription, setIsModifyDescription] = useState(false);

    const getInfo = async ()=>{
        try{
            const response = await fetch(`/user/profile?username=${id}`, { method: 'GET' });

            if(response.ok){
                const data = await response.json();
                console.log("유저 조회 성공");
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
                <S.MainUserInfo>
                    <S.UserImageContainer>
                        <S.UserImage src={""} width={80} height={80}/>
                        <S.FileBtn type={"file"} id={"file"}/>
                    </S.UserImageContainer>
                    <S.UsernameContainer>
                        <S.InputBox
                            type={"text"}
                            value={username}
                            isModify={IsModifyName}
                            readOnly={!IsModifyName}
                            placeholder={"아이디를 입력해주세요"}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}/>
                        <S.ModifyBtn color={IsModifyName} onClick={()=>setIsModifyName((current) => !current)}>{IsModifyName? "수정완료": "수정하기"}</S.ModifyBtn>
                    </S.UsernameContainer>
                </S.MainUserInfo>
                <S.TextAreaBox isModify={IsModifyDescription}>
                    <S.TextArea/>
                    <S.ModifyBtn align={"right"} color={IsModifyDescription} onClick={()=>setIsModifyDescription((current) => !current)}>{IsModifyDescription? "수정완료": "수정하기"}</S.ModifyBtn>
                </S.TextAreaBox>
                <S.UserInfo>
                    <div>User {username}</div>
                    <div>Role</div>
                    <div>Created At {createdAt}</div>
                </S.UserInfo>
                <S.ModifyBtn size={"16px"} align={"right"} color={true}>비밀번호 변경하기</S.ModifyBtn>
            </S.Content>
        </S.Wrapper>
    );
}
