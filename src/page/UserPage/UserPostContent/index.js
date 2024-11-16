import styled from "styled-components";
import React, {useState} from "react";
import Document from "../../../components/Documents/Long";
import Larrow from '../../../assets/left_arrow.svg';
import Rarrow from '../../../assets/right_arrow.svg';
import {PageNum, Arrow} from "../../moreContents/style.ts";

export default function UserPostContent(){
    const [page, setPage] = useState(1);
    const [Posts, setPosts] = useState([{title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}, {title: "dsfadfasd", date: "asdfkjasdfkasd", category: "fjasldjfalksdj"}]);

    return (
        <Container>
            <PostWrapper>
                {Posts.map((Post) => <Document data={Post} key={Post.id}/>)}
            </PostWrapper>
            <PageNum>
                <Arrow src={Larrow} alt={"왼쪽"} onClick={()=>setPage(page+1)} />
                <p> page </p>{/*page 중괄호 씌우기*/}
                <Arrow src={Rarrow} alt={"오른쪽"} onClick={()=>setPage(page-1)} />
            </PageNum>
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