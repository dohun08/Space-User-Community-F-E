import styled from "styled-components";
import {useState} from "react";

function UserPost({title, time, category}) {
    return(
        <PostWrapper>
            <PostTitle>{title}</PostTitle>
            <PostInfo><div>{time}</div><div>{category}</div></PostInfo>
        </PostWrapper>
    );
}

const PostWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #B6B6B6;
`

const PostTitle = styled.div`
    color: #301C86;
    font-size: 16px;
    font-weight: 600;
`

const PostInfo = styled.div`
    display: flex;
    color: #818181;
    font-size: 14px;
    font-weight: 500;
    gap: 10px;
`

export default function UserPostContent(){
    const [Posts, setPosts] = useState([]);
    return (
        <Container>
            <Title>내가 작성한 글</Title>
            {Posts.map((Post) => <UserPost title={Post.title} time={Post.time} category={Post.category}/>)}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
`