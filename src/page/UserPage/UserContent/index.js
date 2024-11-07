import * as S from './style.ts'
import Rectangle from "../../../components/Button/Rectangle";
import {useState} from "react";

export default function UserContent(){
    const [IsModify, setIsModify] = useState(false);
    function onClickHandlerBtn(){
        setIsModify((prevState)=>!prevState);
    }
    console.log('IsModify:', IsModify);
    return (
        <S.Wrapper>
            <S.ModifyContainer>
                <S.ModifyBtn onClick={onClickHandlerBtn} display={!IsModify}>수정하기</S.ModifyBtn>
                <Rectangle onClick={onClickHandlerBtn} width={"80px"} height={"25px"} size={"12px"} name={"저장하기"} display={IsModify}/>
            </S.ModifyContainer>
            <S.UserInfoContent>
                <S.UserImageContainer>
                    <S.UserImage src={""} alt={""}/>
                    <Rectangle name={"이미지 수정"} size={"12px"} width={"100%"} borderRadius={"10px"} height={"25px"}/>
                    <S.DelBtn>이미지 삭제</S.DelBtn>
                </S.UserImageContainer>
                <S.TextInfo>
                    <S.TextContainer><S.TextBox>아이디 :</S.TextBox><S.InputBox type={"text"} value={"test1234"} isModify={IsModify} readOnly={!IsModify} placeholder={"아이디를 입력해주세요"}/></S.TextContainer>
                    <S.TextContainer><S.TextBox>나이 :</S.TextBox><S.InputBox type={"number"} value={"11"} isModify={IsModify} readOnly={!IsModify} placeholder={"나이를 입력해주세요"}/></S.TextContainer>
                </S.TextInfo>
            </S.UserInfoContent>
        </S.Wrapper>
    );
}
