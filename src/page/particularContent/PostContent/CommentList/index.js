import styled from "styled-components";
import Comment from "./comment";
import {useEffect, useState} from "react";

export default function CommentList({data, getComment}){
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        setComments(data||[]);
    }, [data])

    return(
        <Ul>
            {comments.map((comment, index) => (
                <>
                    <Comment
                        key={index}
                        writer={comment.authorName}
                        date={comment.date.slice(0, 10)}
                        content={comment.content}
                        id={comment.id}
                        getComment={getComment}
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