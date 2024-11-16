import styled from "styled-components";
import React, {useState} from "react";
import Document from "../../../components/Documents/Long";
import PageScroll from "../../../components/pageScroll";


export default function UserPostContent(){
    const [page, setPage] = useState(1);
    const [Posts, setPosts] = useState([{title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}]);

    return (
        <Container>
            <PostWrapper>
                {Posts.map((Post) => <Document data={Post} key={Post.id}/>)}
            </PostWrapper>
            <PageScroll page={page} setPage={setPage} contentLength={Posts.length} />
        </Container>
    );
}

const Container = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    border: 3px solid #DFDFDF;
    border-radius: 30px;
    display: flex;
    width: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px 12px 30px;
`

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`