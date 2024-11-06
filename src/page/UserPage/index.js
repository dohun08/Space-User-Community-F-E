import styled from "styled-components";
import Header from "../../components/Header";
import UserContent from "./UserContent";
import UserPost from "./UserPostContent";

export default function UserPage(){
    return(
        <Container>
            <Header/>
            <Content>
                <UserContent/>
                <UserPost/>
            </Content>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 95vh;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80%;
    overflow: scroll;
    box-sizing: border-box;
    border-radius: 30px;
    border: 3px solid #DFDFDF;
    background: #FFF;
    width: 50%;
    padding: 30px 50px;
    gap: 50px;
`