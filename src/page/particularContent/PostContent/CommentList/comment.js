import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {useEffect, useRef, useState} from "react";
import {authAtom} from "../../../../recoil/authAtom";
import Rectangle from "../../../../components/Button/Rectangle";

export default function Comment({writer, date, content, id, getComment, isReComment, reCommentCount, getReComment}) {
    const getAuth = useRecoilValue(authAtom);
    const [isUpdate, setIsUpdate] = useState(false);
    const [CommentContent, setCommentContent] = useState(content);
    const [isCreateReComment, setIsCreateReComment] = useState(false);
    const [ReComment, setReComment] = useState("");
    const [ReCommentList, setReCommentList] = useState([]);
    const [isShowRecomment, setIsShowRecomment] = useState(false);

    const textarea = useRef();

    const getReComments = async () => {
        try{
            const res = await fetch(`/api/community/recomment/${id}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': getAuth.access_Token ? getAuth.access_Token : 'Bearer null'
                },
                credentials: 'include'
            });
            if(res.ok){
                const data = await res.json();
                setReCommentList(data);
            }

        } catch(err) {
            console.log(err);
        }
    }

    const deleteComment = async () => {
        try{
            const res = await fetch(`/api/community/${isReComment? "recomment" : "comment"}/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuth.access_Token,
                },
                credentials: 'include'
            })
            if(res.ok){
                console.log(typeof getComment);
                await getComment();
                if(isReComment){
                    setReComment("");
                    await getReComment();
                    console.log(ReCommentList);
                }
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
            const res = await fetch(`/api/community/${isReComment? "recomment" : "comment"}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuth.access_Token,
                },
                credentials: 'include',
                body:JSON.stringify({
                    id:id,
                    content: CommentContent
                })
            })
            if(res.ok){
                setIsUpdate(false);
                await getComment();
                if(isReComment){
                    setReComment("");
                    await getReComment();
                }
            }
        }catch (error){
            console.log("error patch comment on : ",error);
        }
    }

    const createReComment = async () => {
        if(ReComment===""){
            alert("값이 비어있습니다");
            return;
        }
        try{
            const res = await fetch(`/api/community/recomment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getAuth.access_Token,
                },
                credentials: 'include',
                body:JSON.stringify({
                    "commentId": id,
                    "content": ReComment
                })
            })

            if(res.ok){
                setIsCreateReComment(false);
                setReComment("");
                await getReComments();
                await getComment();
                setIsShowRecomment(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleResizeHeight = () => {
        if (textarea.current) {
            textarea.current.style.height = 'auto'; // 높이 초기화
            textarea.current.style.height = `${textarea.current.scrollHeight}px`; // scrollHeight 기반으로 높이 설정
        }
    };

    const onChangeHandler = (e) => {
        setReComment(e.target.value);
        handleResizeHeight();
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
            {isReComment ? <></> : (
                <>
                    <BlackTextBtn onClick={()=>setIsCreateReComment(true)}>답글</BlackTextBtn>
                    {reCommentCount===0 ? <></>:(
                        <ColorTextBtn onClick={()=>{
                            getReComments();
                            setIsShowRecomment(true);
                        }}>답글 {reCommentCount}개 더보기</ColorTextBtn>
                    )}
                    <ReCommentContainer>
                        <ReCommentSmallContainer>
                    {isCreateReComment && (
                        <ReCommentInputContainer>
                            <ReCommentInput placeholder={"댓글을 작성해주세요."} ref={textarea} onChange={onChangeHandler} rows={1}/>
                            <BtnContainer><BlackTextBtn onClick={()=>setIsCreateReComment(false)}>취소</BlackTextBtn><ColorTextBtn onClick={createReComment}>확인</ColorTextBtn></BtnContainer>
                        </ReCommentInputContainer>
                        )}
                    {isShowRecomment &&
                        ReCommentList.length > 0 &&
                        ReCommentList.map((item, index) => (
                            <Comment
                                key={index}
                                writer={item.authorName}
                                date={item.date.slice(0, 10)}
                                content={item.content}
                                id={item.id}
                                isReComment={true}
                                getComment={getComment}
                                getReComment={getReComments}
                            />
                        ))
                    }
                        </ReCommentSmallContainer>
                    </ReCommentContainer>
                </>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.li`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 6px;
    box-sizing: border-box;
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
    padding: 0 5px;
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

const BlackTextBtn = styled.div`
    text-align: end;
    cursor: pointer;
    font-size: 12px;
`

const ColorTextBtn = styled(BlackTextBtn)`
    color: #99479C;
`

const ReCommentSmallContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const ReCommentInput = styled.textarea`
    border-radius: 10px;
    word-break: break-word;
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    resize: none;
    outline: none;
    overflow: hidden;
    width: 100%;
`

const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ReCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

const ReCommentInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
`