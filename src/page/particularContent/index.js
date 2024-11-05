import styled from "styled-components";
import PostContent from "./PostContent";
import Header from "../../components/Header";
import FamousPost from "./FamousPost";

export default function ParticularContent() {
    return (
        <Container>
            <Header/>
            <Content>
                <PostContent/>
                <FamousPost/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
`

const Content = styled.div`
    display: flex;
    gap: 5%;
    justify-content: center;
    height: 80%;
    overflow: scroll;
`