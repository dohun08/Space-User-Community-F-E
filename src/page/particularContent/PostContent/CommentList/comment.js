import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {useState} from "react";
import {authAtom} from "../../../../recoil/authAtom";

export default function Comment({writer, date, content, id, getComment}) {
    const getAuth = useRecoilValue(authAtom);
    const [isUpdate, setIsUpdate] = useState(false);
    const [CommentContent, setCommentContent] = useState(content);
    const deleteComment = async () => {
        try{
            const res = await fetch(`/api/community/comment/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuth.access_Token,
                },
                credentials: 'include'
            })
            if(res.ok){
                getComment();
            }
        }catch (error){
            console.log(error);
        }
    }
    const update = () => {
        setIsUpdate(true);
    }
    const updateComment = async () => {
        if(CommentContent === ""){
            alert("값이 비어있습니다.");
            return ;
        }
        try{
            const res = await fetch(`/api/community/comment/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuth.access_Token,
                },
                credentials: 'include',
                body:JSON.stringify({
                    content: CommentContent
                })
            })
            if(res.ok){
                setIsUpdate(false);
                getComment();
            }
        }catch (error){
            console.log("error patch comment on : ",error);
        }
    }
    return(
        <Wrapper>
            <TitleWrapper>
                <Title>{writer} - {date}</Title>
                <span>
                    {getAuth.username === writer ?
                        <>
                            {isUpdate ?
                                <DelBtn type={"button"} value={"수정완료"} onClick={updateComment}></DelBtn>
                                : <DelBtn type={"button"} value={"수정"} onClick={update}></DelBtn>
                            }
                            <DelBtn type={"button"} value={"제거"} onClick={deleteComment}></DelBtn>
                        </>:
                        getAuth.isAdmin ?
                                <DelBtn type={"button"} value={"제거"} onClick={deleteComment}></DelBtn>
                             :
                        null
                    }

                </span>
            </TitleWrapper>
            {isUpdate ?
                <ContentPatch type={"text"} value={CommentContent} onChange={(e)=>setCommentContent(e.target.value)}></ContentPatch>
                : <Content>{CommentContent}</Content>
            }

        </Wrapper>
    )
}

const Wrapper = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0 6px;
    border-bottom: 2px solid #B1B1B1;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 800;
`

const DelBtn = styled.input`
    cursor: pointer;
    color: #9A9A9A;
    font-size: 12px;
    background: none;
    border: none;
`

const Content = styled.div`
    color: #000;
    font-size: 14px;
    padding: 10px 5px;
    margin-bottom: 5px;
`
const ContentPatch = styled.input`
    color: #000;
    font-size: 14px;
    border: 1px solid #B1B1B1;
    outline: none;
    padding: 10px 5px;
    margin-bottom: 5px;
`