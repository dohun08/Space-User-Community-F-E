import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {authAtom} from "../../../../recoil/authAtom";

export default function Comment({writer, date, content, id, getComment}) {
    const getAuth = useRecoilValue(authAtom);
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
    return(
        <Wrapper>
            <TitleWrapper>
                <Title>{writer} - {date}</Title>
                <span>
                    {getAuth.username === writer ?
                        <>
                        <DelBtn type={"button"} value={"제거"} onClick={deleteComment}></DelBtn>
                        <DelBtn type={"button"} value={"수정"} onClick={()=>console.log(1)}></DelBtn>
                        </>:
                        getAuth.isAdmin ?
                                <DelBtn type={"button"} value={"제거"} onClick={deleteComment}></DelBtn>
                             :
                        null
                    }

                </span>
            </TitleWrapper>
            <Content>{content}</Content>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 10px 6px;
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
`