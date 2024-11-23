import styled from "styled-components";
import Heart1 from "../../../assets/Heart1.svg";
import Heart2 from "../../../assets/Heart2.svg";
import {authAtom} from "../../../recoil/authAtom";
import {useRecoilValue} from "recoil";
import {decodeJWT} from "../../../until/authService";

export default function Like({likes, id, getPost, isLiked}){

    const auth = useRecoilValue(authAtom);
    async function onClickHandler(){
        const authorId = decodeJWT(auth.access_Token);
        if(isLiked){
            try{
                const res = await fetch('/api/community/doc/unlike', {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': auth.access_Token
                    },
                    credentials:'include',
                    body:JSON.stringify({
                        authorId:authorId.userId,
                        documentId:id
                    })
                });

                if(res.ok){
                    getPost();
                }
            }catch (error){
                console.log(error, "error on like");
            }
        }
        else{
            try{
                const res = await fetch('/api/community/doc/like', {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': auth.access_Token
                    },
                    credentials:'include',
                    body:JSON.stringify({
                        authorId:authorId.userId,
                        documentId:id
                    })
                });

                if(res.ok){
                    getPost();
                }
            }catch (error){
                console.log(error, "error on like");
            }
        }
    }
    return(
        <Container onClick={onClickHandler}>
            <img src={isLiked? Heart2:Heart1} alt="heart" width="25px"/>
            <CountText>{likes||0}</CountText>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 3px solid #DFDFDF;
`

const CountText = styled.div`
    color: #000;
    font-size: 12px;
`