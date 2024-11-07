import styled from "styled-components";
import Comment from "./comment";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function CommentList(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const getComments = async ()=>{
        try{
            const response = await fetch(`/community/comment/${id}`, {
                method:'GET',
            })
            const data = await response.json();
            if(data.status===200){
                console.log("댓글 조회 성공");
            }
        }catch (error){
            console.log("error on : ",error);
            navigate("/error");
        }
    };

    useEffect(()=>{
        getComments();
    }, []);
    return(
        <Ul>
            {comments.map((comment, index) => (
                <>
                    <Comment
                        key={index}
                        writer={comment.userid}
                        date={comment.date}
                        content={comment.content}
                    />
                    <Hr/>
                </>
            ))}
        </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0;
    & hr:last-child{
        display: none;
    }
`

const Hr = styled.hr`
    border: 1px solid #B1B1B1;
    width: 100%;
`