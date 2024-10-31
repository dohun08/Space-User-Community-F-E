import * as S from './style.ts'
import titleImg from "../../../assets/titleImg1.svg";
import Rectangle from "../../../components/Button/Rectangle";
import CommentList from "./CommentList";
import {useEffect} from "react";

function PostDetail({ category, title, date, writer}) {
    const getComments = async ()=>{
        try{
            const response = await fetch(`/community/comment/:${1}`, {
                method:'GET',
                headers:{

                }
            })
            // if(response.ok){
            //     setData();
            // }
        }catch (error){
            console.log("Error :" , error);
        }
    };
    useEffect(()=>{
        getComments();
    }, []);
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderHead>
                    <S.category>{category}</S.category>
                    <S.ManagePost><S.ManageBtn>제거</S.ManageBtn> - <S.ManageBtn>수정</S.ManageBtn></S.ManagePost>
                </S.HeaderHead>
                <S.titleWrap><S.titleImg src={titleImg}/><S.title>{title}</S.title></S.titleWrap>
                <S.postInfo>{date} - {writer}</S.postInfo>
            </S.Header>
            <S.contents>내용</S.contents>
            <S.hr/>
            <S.InputCommentBox>
                <S.CommentTitle>n개의 댓글</S.CommentTitle>
                <S.InputComment placeholder={"댓글을 작성해주세요"}></S.InputComment>
                <Rectangle name={"댓글 작성"}/>
            </S.InputCommentBox>
            <CommentList comments={[{writer:"33", date:"33", content:"333"}, {writer:"33", date:"33", content:"333"}]}/>
        </S.Wrapper>
    );
}

export default PostDetail;