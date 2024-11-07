import * as S from './style.ts'
import titleImg from "../../../assets/titleImg1.svg";
import Rectangle from "../../../components/Button/Rectangle";
import CommentList from "./CommentList";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import InputText from "../../../components/InputText";

function PostContent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem("accessToken");
    const [isWriter, setIsWriter] = useState(false);
    const getPost = async ()=>{
        try{
            const response = await fetch(`/community/doc/${id}`, {
                method:'GET',
            })
            const data = await response.json();
            if(data.status===200){
                console.log("글 조회 성공");
            }
        }catch (error){
            console.log("error on : ",error);
            navigate("/error");
        }
    };

    useEffect(()=>{
        getPost();
    }, []);

    const delPost = async () => {
        try{
            const response = await fetch(`/community/doc/${id}`, {
                method:'DELETE',
            })
            const data = await response.json();
            if(data.status===200){
                console.log("글 삭제 성공");
            }
        }catch (error){
            console.log("error on : ",error);
            navigate("/error");
        }
    }
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderHead>
                    <S.category>{category}</S.category>
                    <S.ManagePost><S.ManageBtn onClick={delPost}>제거</S.ManageBtn> - <S.ManageBtn>수정</S.ManageBtn></S.ManagePost>
                </S.HeaderHead>
                <S.titleWrap><S.titleImg src={titleImg}/><S.title>{title}</S.title></S.titleWrap>
                <S.postInfo>{date} - {writer}</S.postInfo>
            </S.Header>
            <S.contents>내용</S.contents>
            <S.hr/>
            <S.InputCommentBox>
                <S.CommentTitle>n개의 댓글</S.CommentTitle>
                <InputText type={"textarea"} placeholder={"댓글을 입력해주세요"} height={"90px"}/>
                <S.BtnContainer><Rectangle name={"댓글 작성"}/></S.BtnContainer>
            </S.InputCommentBox>
            <CommentList comments={[{writer:"33", date:"33", content:"333"}, {writer:"33", date:"33", content:"333"}]}/>
        </S.Wrapper>
    );
}

export default PostContent;