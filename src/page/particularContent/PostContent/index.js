import * as S from './style.ts'
import titleImg from "../../../assets/titleImg1.svg";
import Rectangle from "../../../components/Button/Rectangle";
import CommentList from "./CommentList";
import {useNavigate, useParams} from "react-router-dom";
import InputText from "../../../components/InputText";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../../recoil/authAtom";

function PostContent({data}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const getAuth = useRecoilValue(authAtom);
    const userId = getAuth.username||null;
    const isManager = localStorage.getItem("isManager");
    const delPost = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            try{
                const response = await fetch(`/community/doc/${id}`, {
                    method:'DELETE',
                })
                const data = await response.json();
                if(data.status===200){
                    console.log("글 삭제 성공");
                    navigate("/");
                }
            }catch (error){
                console.log("error on : ",error);
                navigate("/error");
            }
        }
    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderHead>
                    <S.category>{data["category"]}</S.category>
                    {userId===id? <S.ManagePost><S.ManageBtn onClick={delPost}>제거</S.ManageBtn> - <S.ManageBtn onClick={navigate('/')}>수정</S.ManageBtn></S.ManagePost>:null}
                </S.HeaderHead>
                <S.titleWrap><S.titleImg src={titleImg}/><S.title>{data["title"]}</S.title></S.titleWrap>
                <S.postInfo>{data["createdAt"]} - {data["userId"]}</S.postInfo>
            </S.Header>
            <S.contents>{data["content"]}</S.contents>
            <S.hr/>
            <S.InputCommentBox>
                <S.CommentTitle>{(data["comments"]||[]).length}개의 댓글</S.CommentTitle>
                <InputText type={"textarea"} placeholder={"댓글을 입력해주세요"} height={"90px"}/>
                <S.BtnContainer><Rectangle name={"댓글 작성"} display={true}/></S.BtnContainer>
            </S.InputCommentBox>
            <CommentList data={data["comments"]}/>
        </S.Wrapper>
    );
}

export default PostContent;