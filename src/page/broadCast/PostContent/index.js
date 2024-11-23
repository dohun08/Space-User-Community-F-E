import * as S from './style.ts'
import {useNavigate, useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../../recoil/authAtom";
import Speaker from "../../../assets/speaker.svg";
import make from "../../../until/postDoc";
function PostContent({data}) {
    const navigate = useNavigate();
    const getAuth = useRecoilValue(authAtom);
    const id = useParams();

    const delPost = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            if(getAuth.isAdmin){
                try{
                    const response = await fetch(`/api/broadcast/${id.id}`, {
                        method:'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': getAuth.access_Token
                        },
                        credentials: 'include'
                    })
                    if(response.ok){
                        console.log("글 삭제 성공");
                        navigate("/");
                    }
                }catch (error){
                    console.log("error on : ",error);
                }
            }
        }
    }
    const makeContent = (text) => {
        return make(text)
    };
    console.log(data);
    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderHead>
                    <S.category>공지</S.category>
                    {getAuth.isAdmin ?
                        <S.ManagePost>
                            <S.ManageBtn onClick={() => {
                                navigate(`/patch/${id.id}`, {
                                    state: {
                                        patchContent: data.contents || "",
                                        patchTitle: data.title,
                                        patchCategory: "공지",
                                        patchIcon: 0,
                                        patchDocumentId:data.documentId
                                    }
                                });
                            }}>
                                수정
                            </S.ManageBtn>

                            <S.ManageBtn onClick={delPost}>제거</S.ManageBtn>
                        </S.ManagePost>
                        : null}
                </S.HeaderHead>
                <S.titleWrap><S.titleImg src={Speaker}/><S.title>{data["title"]}</S.title></S.titleWrap>
            </S.Header>
            <S.contents>{makeContent(data["contents"])}</S.contents>
        </S.Wrapper>
    );
}

export default PostContent;