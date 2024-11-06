import styled from "styled-components";
import Comment from "./comment";

export default function CommentList({comments}){
    return(
        <Ul>
            {comments.map((comment, index) => (
                <>
                    <Comment
                        key={index}
                        writer={comment.writer}
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